# Training Log PWA: Complete AI Handoff

This file gives a new AI enough context to edit, test, and deploy the Training Log app without relying on prior chat history.

## Project identity

- Local repository: `/Users/nickseginowich/Documents/New project`
- GitHub repository: `https://github.com/Nickseginowich/training-log-app`
- Production app: `https://nickseginowich.github.io/training-log-app/`
- Deployment branch: `main`
- Hosting: GitHub Pages, automatically redeployed after a push to `main`
- Use `git log -1 --oneline` to identify the local baseline; verify origin/main and live files independently before claiming it is deployed.
- Stack: static HTML, CSS, and vanilla JavaScript PWA
- Backend: none
- Build step: none
- Package manager/dependencies: none
- Credentials/API keys: none are needed or stored

## Product intent

This is a simple, polished, mobile-first personal training app. The desired visual direction is restrained and Apple-like: clear typography, neutral surfaces, strong hierarchy, minimal choices, and no dashboard clutter.

The main workflow is deliberately shallow:

1. Open the app and choose Workouts or Body Weight from the top tabs.
2. Workouts shows Monday, Tuesday, Thursday, Friday and Saturday only. Wednesday and Sunday are recovery days.
3. Choose a day to see two native expandable sections: Daily Mobility first, Workout second.
4. Daily Mobility contains the shared six-move routine, with images, doses, concise setup/focus/cues/avoid text, and one Done checkbox per move.
5. Workout summarizes every exercise in programmed order before opening; expanding it shows all of that day's exercise cards and form images.
6. Workout tracking means one checkbox per prescribed set, with no weight or rep entry fields. Ranges such as 2-3 sets show the third set as optional. Required-set progress excludes optional sets.
7. The Saturday sled combination is four rounds, each with a 20 m push and 20 m backward drag, with one checkbox per round.
8. Section open/closed state survives switching tabs or returning to that day within the current session. Completion marks persist locally across reloads.
9. The selected day remains at the top of the day screen.

## Current program (2026-10-03)

The user supplied a new posture-first plan and authorized replacing the old plan. `PROGRAM` in `app.js` is canonical. Do not reintroduce older Wednesday workouts, forced flat-back coaching, or the former Friday circuit.

### Monday: Upper Body - Chest + Scapular Control

1. Incline Dumbbell Press: 4 x 6-8
2. Chest-Supported Row: 3 x 8-10
3. Half-Kneeling Landmine Press: 3 x 8/side
4. Push-Up Plus: 3 x 10-15
5. Prone Y Raise: 3 x 10-15
6. Suitcase Carry: 3 x 30-40 m/side

### Tuesday: Lower Body - Pelvis + Posterior Chain

1. Front Squat: 4 x 6-8
2. Romanian Deadlift: 4 x 6-8
3. Bulgarian Split Squat: 3 x 8/side
4. Hip Thrust: 3 x 8-10
5. Hamstring Curl: 3 x 10-15
6. Dead Bug (Progressed): 3 x 6/side
7. Side Plank: 3 x 30-45 sec/side

### Thursday: Upper Body - Rounded Shoulders + Head Position

1. Low-Incline Dumbbell Press: 4 x 8-10
2. One-Arm Cable Row With Reach: 3 x 10/side
3. Half-Kneeling Landmine Press: 3 x 10/side
4. Serratus Wall Slide: 3 x 10-12
5. Prone Y Raise: 3 x 12
6. Cable or Band External Rotation: 2-3 x 12-15
7. Deep-Neck-Flexor Nod: 3 x 8 reps, 5-sec holds
8. Front-Rack Carry: 3 x 20-30 m

### Friday: Lower Body - Athletic Trunk + Pelvic Stability

1. Trap-Bar Deadlift: 4 x 4-6
2. Reverse Lunge: 3 x 8/leg
3. Step-Up: 3 x 8/leg
4. Single-Leg RDL: 3 x 8/leg
5. Pallof Press: 3 x 10/side
6. Copenhagen Plank: 2-3 x 20-30 sec/side
7. Sled Push: 5-6 x 20 m

### Saturday: Integrated Posture + Athletic Movement

1. Farmer Carry: 4 x 30-40 m
2. Bear Crawl: 4 x 15-20 m
3. Walking Lunges: 3 x 10/leg
4. Push-Up Plus: 3 x 12-15
5. Pull-Up: 3 x 6-10
6. Sled Push + Backward Drag: 4 rounds x 20 m push + 20 m backward drag
7. Zone 2 Cardio: 1 x 20-30 min

## Daily Mobility (8-10 minutes)

1. 90/90 Wall Breathing: 2 sets x 5 slow breaths
2. Dead Bug: 1 set x 6 reps/side
3. Half-Kneeling Hip-Flexor Mobilization: 8 controlled reps/side
4. Thoracic Extension Over Foam Roller: 6 controlled reps
5. Serratus Wall Slide: 1 set x 10 reps
6. Deep-Neck-Flexor Nod: 8 reps x about 5-sec hold

The global cue is head over ribs, ribs over pelvis, weight through mid-foot. Keep a comfortable natural lumbar curve, relaxed shoulders, and natural shoulder-blade movement. Do not coach permanent pelvic tucking, forced lumbar flattening, or shoulders permanently pinned back/down.

The workout footer contains the supplied progression guidance and 12-week phase outline. There is no separate daily cooldown feature.

## Architecture and important files

- `index.html`: semantic shell, top navigation, Workouts view, Body Weight view, manifest/icon links.
- `styles.css`: all UI styling and responsive behavior.
- `app.js`: mobility data, exercise-image lookup, weekly program, state, rendering, checklists, body-weight chart, local persistence, and service-worker registration/status.
- `service-worker.js`: versioned offline app-shell cache and stale-while-revalidate asset handling.
- `manifest.webmanifest`: installable PWA metadata.
- `assets/mobility/`: original 16:9 instructional images, reused where appropriate.
- `assets/workouts/`: workout reference images, including 18 new images for the October plan. `generation-prompts.json` records generation prompts; it is documentation, not an app dependency.
- `assets/icons/`: PWA and Apple touch icons.
- `README.md`: short deployment and local-preview notes.
- `.nojekyll`: prevents GitHub Pages/Jekyll processing.

## Data model and rendering conventions

### Exercise records

Use the existing helper instead of inventing a new shape:

```js
exercise(id, title, sets, reps, sectionName, instructionSections)
```

- `id` must be stable and unique. Existing completion data is keyed by it.
- `sets` is a string: fixed values use that many checkboxes; ranges like `2-3` use the maximum, marking sets above the minimum optional.
- `reps` is display text and can contain values such as `8/leg`, `20-30 sec`, or `40 yards/side`.
- `sectionName` retains the existing `note` field; current exercises use `"Workout"`.
- `instructionSections` is an array of `[heading, bulletPoints]` pairs.

The current plan uses ordinary exercise records, not the old superset/circuit shape. The sled combination has optional `setLabel: "Round"` to label its checklist correctly.

### Images

Every workout exercise maps its stable ID in `EXERCISE_IMAGES` to a local image under `assets/workouts/` or a reused mobility image. Values are strings, except the Saturday sled combination uses an array of two paths to show both movements. Images use lazy loading and fixed dimensions.

New exercise images should match the existing native style:

- 16:9 landscape PNG
- approximately 1672 x 941
- warm off-white background
- clean, realistic instructional fitness illustration
- consistent athletic male figure and muted clothing palette
- clear full-body form reference, without awkward crops or embedded UI

When adding an image:

1. Save it under `assets/workouts/` with a descriptive lowercase filename.
2. Add the exercise-ID mapping to `EXERCISE_IMAGES` in `app.js`.
3. Add the image path to `APP_SHELL` in `service-worker.js`.
4. Bump `CACHE_VERSION`.

### Section grouping

`renderDayChoices()` renders the two native `<details>` sections. `renderMobilityCard()` and `renderWorkoutDetail()` preserve the shared exercise-card style. Exercise order comes directly from each day's `PROGRAM.exercises` array; there are no intermediate workout-group pages.

### Local persistence

The app stores all user data on the device with `localStorage`:

- Workouts: `training-log.workouts.v11`
- Body weight: `training-log.weights.v11`

Do not rename these keys or clear stored data unless the user explicitly requests a migration. There is no cloud sync or account system. Data remains local to the browser/PWA installation.

## Offline and reliability rules

The app is designed to work after the first successful HTTPS visit even without internet access.

For every deployed code, CSS, HTML, manifest, icon, or image change:

1. Update the file.
2. Ensure every required static asset is listed in `APP_SHELL`.
3. Change `CACHE_VERSION` in `service-worker.js` to a new unique descriptive value.
4. Validate `service-worker.js` syntax.

Failing to bump the cache version can leave phones on stale content. The status pill may briefly show Updating and should settle on Offline ready after the new service worker activates.

## Body Weight page

The Body Weight tab provides:

- date input
- weight input in pounds
- Save Weight action
- recent trend chart
- history list

Entries are stored locally. Preserve this feature when editing workouts unless the user explicitly asks to change it.

## Design constraints

- Mobile-first, but functional on desktop.
- Keep the first screen simple; do not add summaries, marketing copy, or decorative sections.
- Preserve the current top Workouts/Body Weight tab control.
- Use strong, readable exercise titles and concise one-line bullets.
- Keep workout sections visually distinct and scannable.
- Keep cards at the existing modest corner radius; avoid oversized rounded pills and nested cards.
- Do not introduce a framework or build tooling for small changes.
- Ensure text never overlaps or overflows on phone widths.

## Safe editing workflow

Before editing:

```sh
cd "/Users/nickseginowich/Documents/New project"
git status --short
git branch --show-current
```

This workspace may contain unrelated untracked files and directories. Ignore them. Never delete, stage, or modify unrelated work.

After editing:

```sh
node --check app.js
node --check service-worker.js
git diff --check
python3 -m http.server 8000 --bind 127.0.0.1
```

Test the affected workflow in a browser at `http://127.0.0.1:8000/`. For program changes, verify:

- the correct day and workout title
- section order and grouping
- exercise order
- prescribed sets/reps
- image loading
- instruction text
- correct count of set checkboxes
- the day label remains visible in section detail
- Back navigation returns to the correct level
- no console errors

Also verify an unaffected mobility card and the Body Weight tab when changes could touch shared rendering or styles.

## Latest verification

The October update was checked against the supplied exercise order and prescriptions, including all 35 workout records, 6 mobility doses, image existence and cache inclusion, and required/optional set counts. Browser checks cover all days, collapse/reopen, tab switching, checkbox persistence, preservation of historical local data, body-weight saving, offline reload/image loading, and 320/390/1440 px layouts. Re-test relevant flows after future changes; this note is not a substitute for fresh validation.

## Commit and deployment

Only stage files related to the requested app change. Do not use `git add .` in this workspace.

```sh
git add app.js styles.css service-worker.js OTHER_INTENTIONAL_FILES
git commit -m "Concise description of the app change"
git push origin main
```

After pushing, wait for GitHub Pages and verify production directly. Use cache-busting query strings while checking:

```sh
curl -fsS "https://nickseginowich.github.io/training-log-app/service-worker.js?verify=UNIQUE" | head -1
curl -fsS "https://nickseginowich.github.io/training-log-app/app.js?verify=UNIQUE" | grep "EXPECTED_NEW_TEXT"
```

Then open the live site, reload once if necessary so the new service worker activates, and test the changed flow in the live UI. Do not tell the user to check until this verification succeeds.

## Security and secrets

This app currently has no secrets. Never add GitHub tokens, Cloudflare credentials, Render credentials, API keys, passwords, private environment values, or browser session data to this repository or to a handoff file. Use the machine's existing authenticated Git session for pushes.

## Starting prompt for another AI chat

Use this message in a new chat:

> Work on the Training Log PWA at `/Users/nickseginowich/Documents/New project`. First read `AGENTS.md` and `APP_HANDOFF.md`, inspect the current code and git status, then make my requested change. Preserve unrelated work, bump the service-worker cache for deployed changes, test locally in the browser, push only the intended files to `main`, and verify the live GitHub Pages app before reporting completion.
