#!/usr/bin/env node
// Validate that animations/registry.js and the animations/ folders agree.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sandbox = { window: {} };
vm.runInNewContext(readFileSync(join(root, 'animations/registry.js'), 'utf8'), sandbox);
const list = sandbox.window.ANIMATIONS;
const errors = [], warnings = [];

if (!Array.isArray(list)) errors.push('animations/registry.js must assign an array to window.ANIMATIONS.');
const slugs = new Set();
for (const a of list || []) {
  const where = `registry entry "${a.slug ?? '?'}"`;
  for (const k of ['slug', 'title', 'description']) if (!a[k] || typeof a[k] !== 'string') errors.push(`${where}: missing "${k}".`);
  if (slugs.has(a.slug)) errors.push(`${where}: duplicate slug.`);
  slugs.add(a.slug);
  if (a.slug && !existsSync(join(root, 'animations', a.slug, 'index.html'))) errors.push(`${where}: animations/${a.slug}/index.html not found.`);
  if (a.slug && !existsSync(join(root, 'animations', a.slug, 'thumb.jpg'))) warnings.push(`${where}: no thumb.jpg, the gallery will show a placeholder.`);
  if (a.added && !/^\d{4}-\d{2}-\d{2}$/.test(a.added)) errors.push(`${where}: "added" must be YYYY-MM-DD.`);
}
for (const d of readdirSync(join(root, 'animations'))) {
  if (statSync(join(root, 'animations', d)).isDirectory() && !slugs.has(d)) errors.push(`animations/${d}/ is not listed in animations/registry.js.`);
}

warnings.forEach(w => console.warn('warn:', w));
errors.forEach(e => console.error('error:', e));
if (errors.length) process.exit(1);
console.log(`ok: ${slugs.size} animation(s) registered.`);
