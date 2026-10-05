# Workflow Worlds

A walk through an AI workflow, at rest or running, in three worlds:

| World | Steps (nodes) are | Connections (edges) are | A run looks like |
| --- | --- | --- | --- |
| **Space** | planets, with rings on AI and review steps | arcs of drifting particles | a bright comet |
| **Town** | roundabouts, each with a building for its kind of step | roads with lane markings | a car driving the road |
| **Beams** | wireframe cores on glowing pads | particle beams | a pulse of light |

The sample workflow is support-ticket triage: a ticket comes in, an AI step labels it, a tool looks up the customer, and a decision sends it either to a drafted reply with human review or to the on-call pager.

## At rest and running

- **At rest:** nothing moves except ambient drift. Tap anything to inspect it.
- **Running:** runs start at the trigger and travel the connections. Each step lights up while it works:
  - blue while running
  - green when it succeeds
  - amber when it retries
  - red when it fails
  - violet while it waits for a person

  Decisions pick a branch by each connection's share of runs. Retries, timeouts, model speed, caching and the reviewer's response time all change how a run behaves. The panel at the bottom left shows runs, success rate, average time and a live log. Speed is 1×, 2× or 4×.

## The tour

**Take the tour** flies the camera from step to step and explains each one in plain words, in order. The explanation covers what kind of step it is, what it does, its settings, and where its output goes. While the workflow is running it also says what the step is doing right now.

- Use **Back** and **Next** (or the arrow keys) to move, or **Auto-play** to step through on its own.
- Press **Edit this** to open the editor on the current step.

## Editing

Tap a step or connection in 3D (or a label) and the camera zooms in. The editor opens beside it, or as a sheet on phones:

- **Sizing the editor:** drag the grip on its left edge (on phones, the handle at the top of the sheet) to make it wider or narrower.
  - Drag all the way across for **full page**, where the 2D map spans the screen and properties, AI and edits sit in three columns below it.
  - Drag back to the edge to **collapse** it to a slim tab; on phones it becomes a peek bar.
  - The **Collapse**, **Expand** and **Full page** buttons do the same. Double-click the grip, or focus it and press Enter, to toggle full page; arrow keys resize it.
  - The size is remembered.

- **Workflow map (2D):** a flat flowchart of the same workflow.
  - Drag steps to move them; the 3D world follows.
  - **+ Step** inserts a step after the selection, or on the selected connection, and shifts later steps to make room.
  - **Connect** links two steps.
  - **Delete** removes a step and joins its neighbours.
- **Properties:** name, type and description, plus settings for each type: model, instructions, retries and timeout for AI steps; tool, cache and timeout for tool calls; the rule for decisions; approver and response time for reviews; channel for actions. Connections have a label, the data they carry and, after a decision, their share of runs.
- **Ask AI to change it:** describe a change ("add a human check after this", "retry 3 times with a 15s timeout", "use a faster model", "send 40% of runs this way", "insert a cache step here"). The AI proposes a list of changes, and you choose **Apply** or **Discard**.
  - The **built-in helper** handles common requests anywhere.
  - When the page runs as a Claude artifact, an **Agent** picker adds **Claude**. Claude sees the workflow and your request, and answers with the same kind of change list. It runs on your own Claude usage.
- **Edits:** every change, yours or the AI's, is listed with a time. Use **Undo** (or Ctrl/Cmd+Z), **Export JSON** or **Reset**.

The workflow is saved in your browser. Add `?fresh=1` to start from the sample.

## URL options

| Option | Effect |
| --- | --- |
| `?theme=space` / `town` / `beam` | Start in that world |
| `?mode=run` | Start running |
| `?tour=1` | Start the tour |
| `?select=n4` / `e3` | Open on a step or connection |
| `?fresh=1` | Ignore the saved workflow and load the sample |
