# Tests

| Command | What it checks | Needs |
|---|---|---|
| `node tests/run.js` | 20 checks in a headless browser: money maths, carry-over, tax, backup round trip, water level, speech and bank-CSV parsing, weather scenes, badges, first run, add/delete/undo, every sheet, English text, PDF summary, CSV import, erase all, feedback info, version number matches `sw.js` and the changelog | Node 18+, `npm i -g playwright && npx playwright install chromium` |
| `node tests/lint.js` | Static check of the app code: undefined names, duplicate keys, dead code | `npm i -D eslint@8` |

Run both before every release. `run.js` exits with code 1 if anything fails.

## Every release

1. Bump the cache in `sw.js` (`luakep-vNN`).
2. Set `APP_VER` in `index.html` to `1.NN` and add the newest entry at the top of `CHANGELOG` (Thai and English).
3. Add the same line at the top of `CHANGELOG.md`.
4. Set `NEWS_VER` to the same number only when the update should show the What's new popup.

`run.js` fails if these drift apart.
