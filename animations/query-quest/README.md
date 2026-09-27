# Query Quest

A SQL game. Type a question in plain English. An agent plans it, streams the SQL, runs it in the browser, picks a chart, and you pin the best insights until a live, dark dashboard unlocks.

Open it from the gallery (`npm run serve`, then http://localhost:8000), or go straight to `/animations/query-quest/`. Add `?fast=1` to speed up the streaming.

## How it works

- **Data:** Halcyon Supply Co., a fictional outdoor-gear retailer. The page generates it from a fixed seed, so everyone gets the same numbers. There are four tables: `customers`, `orders`, `order_items` and `products`, covering Jan 2025 to Aug 2026, about 3.9k orders.
- **SQL engine:** [AlaSQL](https://github.com/AlaSQL/alasql), loaded from cdnjs. Queries run entirely in the page. Only `SELECT`/`WITH` statements are allowed. Anything that writes, reads files or URLs, or runs JavaScript is rejected before it reaches the engine.
- **Built-in agent:** a rule-based planner, not an LLM. It maps a question to:
  - metrics: revenue, profit, margin, units, orders, customers, average order value, return rate
  - breakdowns: month, quarter, year, region, channel, segment, category, product, customer, status
  - filters: year, quarter, region, channel, segment, category
  - top/bottom N

  It shows its plan, streams the SQL token by token, then runs it.
- **Chart choice:** picked from the result's shape:
  - single row → KPI tiles
  - time column → line
  - one category → ranked bar
  - two categories → stacked bar
- **Schema map:** a small three.js scene where tables light up as the SQL mentions them and pulse along join edges while the query runs.

## The game

- **XP:** earned for answering questions, trying new chart types, earning badges, completing missions, and editing and re-running the agent's SQL.
- **Levels:** Intern → Analyst → Senior Analyst → Data Lead → Chief Data Officer.
- **Missions:** nine of them. Clicking one fills in a hint question.
- **Dashboard:** pin three insights to unlock it. It has:
  - hero KPIs with sparklines and a year-over-year change for the latest month
  - every pinned chart, re-run against global Year / Region / Channel filters (charts from SQL you edited by hand stay fixed)
  - a **Live orders** switch that streams new orders into the data and refreshes everything

## Plugging in a real LLM agent

Pass `?agent=<url>` to replace the built-in planner. The page sends:

```http
POST <url>
content-type: application/json

{ "question": "…", "schema": "customers(id INT, …)\norders(…)…", "dialect": "AlaSQL (SQL-92 subset); SELECT only; …" }
```

The endpoint should stream back the SQL as plain text or as Server-Sent Events (`data:` lines, optional `data: [DONE]`). A ```` ```sql ```` fence is fine. The page streams it into the editor, runs it locally with the same read-only guard, and infers the chart. Keep your model API key on the server behind this endpoint, never in the page, and allow the page's origin with CORS.
