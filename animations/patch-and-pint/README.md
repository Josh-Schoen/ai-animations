# Patch & Pint

A gastropub-style operator switchboard for **SQL joins**. Each jack is a table and each faint wire is a join the schema allows. Ask a question in plain words and the exchange narrows the board to the tables that answer it. It suggests pre-connected join routes, patches the one you pick, shows the SQL, and a house analyst pours out the answer.

It runs on **mock data**: twelve tables for three sample pubs (The Crown, The Anchor, The Stag) over 90 days, generated in the page from a fixed seed.

## Finding the right joins

1. **Ask**: type a question (for example *"which dishes get comped most at each pub?"*) or tap an example. The parser picks out:
   - up to two **measures**, such as comp rate, revenue, margin, no-show rate, waste, labour hours or rating
   - a **breakdown**, such as pub, dish, category, channel, beer, style, role, server, segment, daypart, station or weekday
2. **Narrow**: tables the question doesn't need are dimmed. The **Show** chips filter the board by area (front of house, kitchen & bar, cellar & staff), and **Available joins** toggles the faint wires.
3. **Pick a route**: up to three pre-connected routes, shortest first. Each route is tagged:
   - soft joins (on `site_id + date` rather than a key)
   - fan-out (one-to-many steps that would double count)
   - the number of joins

   Hover a route to preview it on the board, then press **Patch it in**.
4. **Or patch by hand**: drag a cord between two jacks, or tap one and then another. If there's no direct key, the exchange routes through the tables in between. Tap a single table to see:
   - its columns, with PK/FK badges
   - its available joins, as one-click patches
   - sample rows

## Each patched line

- **Joins**: each join has an INNER/LEFT switch, with match rate, orphan count and fan-out, so bad keys and null foreign keys stand out.
- **SQL**: the generated query, which you can copy or download as `.sql`.
- **Controls**: change the measure, breakdown, sample size, date range and pub.
- **Insights**:
  - the answer, aggregated at the measure's own grain, so fan-out never double counts
  - a two-measure comparison
  - join health
  - a weekday cut
- **Downloads**: the joined rows as CSV, and the insights (with SQL) as Markdown or JSON.

Pin insights to any **dashboard**. Boards can be renamed, reordered and exported as Markdown, JSON, CSV or one **All SQL** file. Lines and dashboards are saved in your browser.

The mock data has some patterns baked in to find:
- slow kitchen tickets bring comps and lower review scores
- web bookings no-show more
- the Stag's stout goes to waste
- 15% of orders have no customer, and some tickets have no staff member (LEFT vs INNER matters)

## Plugging in a real database

The schema lives in `TABLES` (columns, primary key, date column, domain) and `EDGES` (foreign keys: `{ many, one, keys: [[fkCol, pkCol]], soft }`). Data comes through an adapter:

```js
Switchboard.useAdapter({
  async tables() { /* table metadata */ },
  async joins()  { /* FK edges, e.g. from information_schema */ },
  async rows(table, { days, site }) { /* filtered rows to sample from */ },
  async all(table) { /* lookup rows for the hash joins */ },
});
```

`Switchboard.parseQuestion`, `suggestRoutes` and `buildSQL` are also exposed, so routes and SQL can be generated without the board.

## The agent

- **House analyst (built-in):** deterministic insights plus join-health checks.
- **Claude (hosted page only):** when the page runs as a Claude artifact, an **Agent** picker appears. Claude gets the route, the SQL, the built-in findings and a slice of joined rows, and writes the insights. It runs on the viewer's own Claude usage.
