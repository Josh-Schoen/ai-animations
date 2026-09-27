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
];
