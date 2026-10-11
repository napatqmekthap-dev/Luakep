# Tests

| Command | What it checks | Needs |
|---|---|---|
| `node tests/run.js` | 19 checks in a headless browser: money maths, carry-over, tax, backup round trip, water level, speech and bank-CSV parsing, weather scenes, badges, first run, add/delete/undo, every sheet, English text, PDF summary, CSV import, erase all, feedback info | Node 18+, `npm i -g playwright && npx playwright install chromium` |
| `node tests/lint.js` | Static check of the app code: undefined names, duplicate keys, dead code | `npm i -D eslint@8` |

Run both before every release. `run.js` exits with code 1 if anything fails.
