# ai-animations

A gallery of standalone three.js animations about AI systems. Each animation is a self-contained page in its own folder. There's no build step: three.js loads from jsDelivr through an import map.

```bash
npm run serve        # python3 -m http.server 8000
# open http://localhost:8000 for the gallery
```

## Animations

| Folder | What it shows |
| --- | --- |
| [`animations/agent-eval-nightglass`](animations/agent-eval-nightglass/) | An AI agent running eval suites: live step status, edge traffic, run-of-runs, totals and accuracy, with tap-to-drill-in step details. |
| [`animations/query-quest`](animations/query-quest/) | A SQL game: ask a question in plain English, an agent streams the SQL, runs it in the browser, charts the result, and pinned insights unlock a live dark dashboard. |
| [`animations/breach`](animations/breach/) | A whale-jumping game against an AI agent: faster tapping means higher breaches and bigger splashes, first to 500 points wins. |

## Layout

```
index.html                  gallery page (reads animations/registry.js)
animations/
  registry.js               one entry per animation: slug, title, description, tags, added
  <slug>/index.html         the animation, self-contained
  <slug>/thumb.jpg          16:9 gallery thumbnail (optional, ~960×540)
  <slug>/README.md          notes and controls (optional)
templates/threejs-starter/  starting point copied by `npm run new`
scripts/                    scaffold and check scripts (Node, no dependencies)
```

## Adding an animation

1. `npm run new -- my-slug "My Title" "One-sentence description."`
   This copies the starter into `animations/my-slug/` and adds an entry to `animations/registry.js`.
2. Build the scene in `animations/my-slug/index.html`. Keep it self-contained, and keep the `← ALL ANIMATIONS` link back to the gallery.
3. Add `animations/my-slug/thumb.jpg` (16:9) and adjust `tags` in the registry.
4. Run `npm run check`. It fails if a folder isn't registered, a registry entry has no page, or a field is missing. CI runs the same check on every pull request.
