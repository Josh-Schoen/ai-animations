# Patch & Pint

A gastropub-style operator switchboard: a digital twin of how people connect to people, to data, and to insights. Plug a cord between two jacks and a house analyst agent samples the data behind that connection and pours out insights. You can adjust them, pin them to dashboards, and download them.

It runs on **mock data** for three sample pubs (The Crown, The Anchor, The Stag): 90 days across six sources, generated in the page from a fixed seed. Everything is shaped so a real source can replace the mock one later.

## What each connection does

| Patch | Result |
| --- | --- |
| **Person → data source** | The agent samples the source (size, date range and pub are adjustable). It returns 3–5 insights ranked for that person's role. |
| **Person → person** | An introduction: who they are, the sources they both watch, a suggested agenda, and the headline insight each brings from their own desk. |
| **Data → data** | A join on date: correlation of the two sources' daily figures, an indexed comparison chart, and the pub where the link is clearest. |

Each insight has a headline figure, confidence, a "why it matters" line for the role, and a chart. On every insight you can:
- switch the chart between bar, line, table or none
- edit the wording in place
- remove it
- pin it to any dashboard, or to a new one

On each line you can:
- re-pour it, or draw a new sample
- download the sample as CSV
- download the insights as Markdown or JSON

**Dashboards** are separate boards (e.g. *Friday Briefing*, *Kitchen Pass*, *Back Office*):
- add, rename or delete boards
- reorder cards, move them between boards, retype charts and edit their text
- export a board as Markdown, JSON, an insights CSV, or a CSV of the sample rows behind its cards

Lines and dashboards are saved in your browser.

## Controls

- **Drag** a cord from one jack to another, or **tap** one jack and then another. With a keyboard, Tab to a jack, press Enter, then Enter on a second jack.
- Click a cord or a line in the Operator's log to open it. Double-click a cord, or use **Hang up**, to disconnect.

## Plugging in real data

The page talks to data only through an **adapter** with three calls:

```js
const MyAdapter = {
  name: 'Warehouse',
  async listSources() { /* → [{ id, name, short, desc, cols, rows }] */ },
  async schema(id)    { /* → ['date', 'site', ...] */ },
  async sample(id, { n, days, site, seed }) {
    // e.g. SELECT * FROM <table> WHERE date >= now() - days AND (site = ? OR 'All') ORDER BY random() LIMIT n
    return { rows, population, total, from, to };
  },
};
Switchboard.useAdapter(MyAdapter);   // every open line re-runs against it
```

Keep the column names in `SOURCE_META` (or update them together with the insight recipes in `RECIPES`), and swap `PEOPLE` for a real directory. Each insight recipe is a plain function from sampled rows to insight objects, so adding a metric is a new recipe.

## The agent

- **House analyst (built-in):** deterministic recipes per source, ranked by each person's lens, plus data-quality checks (null rates, freshness) for the Data Steward.
- **Claude (hosted page only):** when the page runs as a Claude artifact, an **Agent** picker appears. Claude gets the built-in findings and up to 60 sampled rows per source, and writes the insights. It runs on the viewer's own Claude usage and asks permission first.

Downloads use the artifact's download prompt when hosted, and a normal browser download otherwise.
