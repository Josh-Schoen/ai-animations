#!/usr/bin/env node
// Scaffold a new animation from the three.js starter and register it in the gallery.
// Usage: npm run new -- <slug> "<Title>" ["<description>"]
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const [slug, title, description = 'TODO: one-sentence description.'] = process.argv.slice(2);

if (!slug || !title) {
  console.error('Usage: npm run new -- <slug> "<Title>" ["<description>"]');
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(`Slug "${slug}" must be lowercase words joined by hyphens, e.g. "token-river".`);
  process.exit(1);
}
const dir = join(root, 'animations', slug);
if (existsSync(dir)) {
  console.error(`animations/${slug} already exists.`);
  process.exit(1);
}

mkdirSync(dir, { recursive: true });
const html = readFileSync(join(root, 'templates/threejs-starter/index.html'), 'utf8').replaceAll('__TITLE__', title);
writeFileSync(join(dir, 'index.html'), html);

const registryPath = join(root, 'animations/registry.js');
const registry = readFileSync(registryPath, 'utf8');
const end = registry.lastIndexOf('];');
const entry = `  {
    slug: ${JSON.stringify(slug)},
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    tags: ['three.js'],
    added: '${new Date().toISOString().slice(0, 10)}',
  },
`;
writeFileSync(registryPath, registry.slice(0, end) + entry + registry.slice(end));

console.log(`Created animations/${slug}/index.html and registered it in animations/registry.js.
Next: build the scene, add animations/${slug}/thumb.jpg (16:9, ~960x540), then run npm run check.`);
