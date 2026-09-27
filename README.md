# ai-animations

A gallery of standalone three.js animations about AI systems. Each animation is a self-contained page in its own folder. There's no build step: three.js loads from jsDelivr through an import map.

**Play online:** [josh-schoen.github.io/ai-animations](https://josh-schoen.github.io/ai-animations/), served by GitHub Pages; `.github/workflows/pages.yml` publishes every push to `main`. You can also open any `index.html` straight from disk; it only needs an internet connection for three.js and fonts.

**Read the story:** [Beam Me Up: The Sci-Fi Computer Is Already in Your Pocket](https://josh-schoen.github.io/ai-animations/article/), about how these were built ([source](article/article.md)).

```bash
npm run serve        # python3 -m http.server 8000
# open http://localhost:8000 for the home page
```

## Animations

| Folder | Play | What it shows |
| --- | --- | --- |
| [`animations/agent-eval-nightglass`](animations/agent-eval-nightglass/) | [Play](https://josh-schoen.github.io/ai-animations/animations/agent-eval-nightglass/) | An AI agent running eval suites: live step status, edge traffic, run-of-runs, totals and accuracy, with tap-to-drill-in step details. |
| [`animations/query-quest`](animations/query-quest/) | [Play](https://josh-schoen.github.io/ai-animations/animations/query-quest/) | A SQL game: ask a question in plain English, an agent streams the SQL, runs it in the browser, charts the result, and pinned insights unlock a live dark dashboard. |
| [`animations/breach`](animations/breach/) | [Play](https://josh-schoen.github.io/ai-animations/animations/breach/) | A whale-jumping game against an AI agent: faster tapping means higher breaches and bigger splashes, first to 500 points wins. |
| [`animations/vector-ko`](animations/vector-ko/) | [Play](https://josh-schoen.github.io/ai-animations/animations/vector-ko/) | A green wireframe boxing game with the controls across the top: read the tells, dodge, counter for stars, and land the star uppercut. |
| [`animations/micro-rally`](animations/micro-rally/) | [Play](https://josh-schoen.github.io/ai-animations/animations/micro-rally/) | An RC-style toy truck racer with four tracks, item boxes (missiles, nitro, oil), AI rivals and a championship. |
| [`animations/kinetic-fury`](animations/kinetic-fury/) | [Play](https://josh-schoen.github.io/ai-animations/animations/kinetic-fury/) | A 2.5D arcade fighter: four fierce original fighters with elemental specials and supers, best-of-three against a CPU. |
| [`animations/patch-and-pint`](animations/patch-and-pint/) | [Play](https://josh-schoen.github.io/ai-animations/animations/patch-and-pint/) | A gastropub switchboard of SQL joins: ask a question, filter the tables to pre-connected join routes, patch one in, and get the SQL, join health and insights on dashboards. |

## Layout

```
index.html                  home page: featured story and games (reads animations/registry.js)
assets/                     shared site.css, theme.js (light/dark) and avatar
article/                    the story: article.md (source) and index.html
animations/
  index.html                gallery of every animation
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
