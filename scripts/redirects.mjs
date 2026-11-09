#!/usr/bin/env node
// Build the GitHub Pages site as a set of redirects to accidentalengineer.ai.
//
// The games are served from the blog now, at accidentalengineer.ai/lab/play/,
// which pulls them from this repo on every build (scripts/sync-games.mjs there).
// GitHub Pages cannot send real HTTP redirects, so each old URL gets a tiny page
// that forwards with a meta refresh, a script that keeps any #hash, and a
// canonical link so search engines credit the new address.
//
// Usage: node scripts/redirects.mjs [outDir]   (default: _site)

import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'

const SITE = 'https://accidentalengineer.ai'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = resolve(root, process.argv[2] || '_site')

const sandbox = { window: {} }
vm.runInNewContext(readFileSync(join(root, 'animations/registry.js'), 'utf8'), sandbox)
const slugs = sandbox.window.ANIMATIONS.map((a) => a.slug)

// Old path (relative to the Pages root) -> new URL on the blog.
const routes = {
  '': `${SITE}/lab/play/`,
  'animations/': `${SITE}/lab/play/`,
  'article/': `${SITE}/lab/beam-me-up`,
  ...Object.fromEntries(slugs.map((s) => [`animations/${s}/`, `${SITE}/lab/play/${s}/`])),
}

const page = (to) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Moved to accidentalengineer.ai</title>
<link rel="canonical" href="${to}" />
<meta name="robots" content="noindex" />
<meta http-equiv="refresh" content="0; url=${to}" />
<script>location.replace(${JSON.stringify(to)} + location.hash);</script>
</head>
<body>
<p>This moved to <a href="${to}">${to}</a>.</p>
</body>
</html>
`

rmSync(out, { recursive: true, force: true })
for (const [from, to] of Object.entries(routes)) {
  const dir = join(out, from)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), page(to))
}
// Anything else (an old asset or a mistyped path) lands on the games list.
writeFileSync(join(out, '404.html'), page(`${SITE}/lab/play/`))
writeFileSync(join(out, '.nojekyll'), '')

console.log(`redirects: ${Object.keys(routes).length} pages -> ${out}`)
