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
];
