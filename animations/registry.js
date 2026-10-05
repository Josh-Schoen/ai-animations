// Gallery registry. One entry per folder in animations/.
// `npm run new -- <slug> "<Title>"` adds an entry for you; `npm run check` validates this file.
// Paths are relative to the repo root. Loaded as a plain script so the gallery also works from file://.
window.ANIMATIONS = [
  {
    slug: 'agent-eval-nightglass',
    title: 'Nightglass Agent Evals',
    description: 'Spy-themed view of an AI agent running eval suites: live step status, edge traffic, run-of-runs, totals and accuracy, with tap-to-drill-in step dossiers.',
    tags: ['three.js', 'agents', 'evals'],
    added: '2026-09-27',
  },
  {
    slug: 'query-quest',
    title: 'Query Quest',
    description: 'A SQL game: ask a question in plain English, watch an agent stream the SQL, run it live, chart the result, and pin insights until a dark live dashboard unlocks.',
    tags: ['sql', 'agents', 'dashboard', 'game'],
    added: '2026-09-27',
  },
  {
    slug: 'breach',
    title: 'Breach',
    description: 'A whale-jumping duel against an AI agent: tap fast to build surge, let go to breach, land flat for bigger splashes, and race the agent to 500 points.',
    tags: ['three.js', 'game', 'agents'],
    added: '2026-09-27',
  },
  {
    slug: 'vector-ko',
    title: 'Vector KO',
    description: 'A green wireframe boxing game: read the opponent\'s tells, dodge, counter for stars, and land the star uppercut, with the controls across the top.',
    tags: ['three.js', 'game'],
    added: '2026-09-27',
  },
  {
    slug: 'micro-rally',
    title: 'Micro Rally',
    description: 'An RC-style toy truck racer on four tracks: grab item boxes, fire missiles, drop oil, and finish top three to advance through the championship.',
    tags: ['three.js', 'game', 'racing'],
    added: '2026-09-27',
  },
  {
    slug: 'kinetic-fury',
    title: 'Kinetic Fury',
    description: 'A 2.5D arcade fighter with four fierce original fighters, elemental specials and screen-shaking supers, fought best-of-three against a CPU that blocks, anti-airs and punishes.',
    tags: ['three.js', 'game', 'fighting'],
    added: '2026-09-27',
  },
  {
    slug: 'patch-and-pint',
    title: 'Patch & Pint',
    description: 'A gastropub switchboard of SQL joins: ask a question, filter the tables, and patch a suggested join route. See the SQL, INNER/LEFT match rates and insights, then pin and export them.',
    tags: ['sql', 'data', 'dashboard'],
    added: '2026-09-27',
  },
  {
    slug: 'workflow-worlds',
    title: 'Workflow Worlds',
    description: 'Walk through an AI workflow at rest or running, as planets and particle streams, a small town of roundabouts and roads, or glowing beams. Tap any step or connection to zoom in, edit it on a 2D map, or ask AI to change it.',
    tags: ['three.js', 'agents', 'workflow'],
    added: '2026-10-05',
  },
];
