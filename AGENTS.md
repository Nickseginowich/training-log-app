# Training Log Agent Instructions

Read `APP_HANDOFF.md` before changing this app. It is the source of truth for the product behavior, architecture, workout-data conventions, testing, and deployment workflow.

## Non-negotiable rules

- Keep the app a dependency-free static PWA unless the user explicitly requests an architectural change.
- Preserve the simple Apple-inspired mobile UI and the current navigation flow.
- Do not rename or clear existing `localStorage` keys unless the user explicitly requests a data migration.
- Every workout exercise must have an entry in `EXERCISE_IMAGES` and a corresponding cached image.
- Whenever any deployed file or asset changes, bump `CACHE_VERSION` in `service-worker.js` to a new unique value.
- Add new static assets to `APP_SHELL` so the installed app continues to work offline.
- Do not store credentials, API keys, tokens, or other secrets in this repository. The current app requires none.
- Do not touch unrelated untracked files in this workspace.
- Validate JavaScript, test the affected flow in a browser, commit to `main`, push, and verify the live GitHub Pages deployment.

## Key locations

- Program, mobility routine, image map, rendering, and local persistence: `app.js`
- Visual design: `styles.css`
- Offline cache: `service-worker.js`
- Full project context: `APP_HANDOFF.md`

