# Operation Nightglass — Agent Eval Visualizer

A spy-themed three.js animation of an AI agent being put through a test suite. It is one `index.html` file with no build step: three.js loads from jsDelivr.

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## What you're looking at

- **Agent node (center, largest).** The subject under test. Its label shows the live config: model, temperature, top_p, max_steps, retries, memory, prompt version and hash, and tools. It pulses while a run executes, then flashes green (cleared) or red (compromised).
- **Test-step nodes (ring).** Eight steps: `INGEST_TASK → PLAN → RETRIEVE → TOOL_CALL → CODE_EXEC → REASON → SAFETY_GUARD → FINAL_ANSWER`. Each label shows the step's metadata (kind, tool, assertion, timeout, last latency, live pass rate). When a run reaches a step, the step glows and its label highlights. The color shows the status:
  - cyan: executing
  - amber: transient fault / retry
  - green: pass
  - red: fail (later steps show `SKIP`)
- **Edges show real activity.** Spokes (agent ↔ step) stream packets while a step executes, then carry a green or red telemetry packet back to the agent. Pipeline edges (step → step) carry the hand-off to the next step. Edges heat up and flow in the direction of travel, then cool when idle.
- **Run of runs.** Each suite is 48 runs. Finished runs orbit the agent as green or red beads, and the HUD grid fills in. After a suite, a debrief banner appears and the agent is reconfigured for the next suite (`S-01 … S-04`, each with different temperature/prompt settings and reliability).
- **Totals.** Overall runs, cleared, compromised, overall accuracy against an 80% threshold with a sparkline, per-suite accuracy history, per-step pass/fail intel, and a live telemetry log.

## Controls

- Drag to orbit, scroll to zoom.
- `Space`: pause/resume. Buttons set speed (1×–8×) and reset.
- URL params: `?speed=4` sets the starting speed, `?runs=16` sets runs per suite (8–96).

## Customising

Edit `AGENT`, `CONFIGS` and `STEPS` at the top of the module script. Each step has a base pass probability `p`, a mean latency `lat` (seconds) and an optional `flaky` flag (can retry). Each config's `mod` scales failure rates. To visualise real eval results, replace the random outcome in `beginStep()` with your own run data.
