# Training Log PWA: Complete AI Handoff

This file gives a new AI enough context to edit, test, and deploy the Training Log app without relying on prior chat history.

## Project identity

- Local repository: `/Users/nickseginowich/Documents/New project`
- GitHub repository: `https://github.com/Nickseginowich/training-log-app`
- Production app: `https://nickseginowich.github.io/training-log-app/`
- Deployment branch: `main`
- Hosting: GitHub Pages, automatically redeployed after a push to `main`
- Use `git log -1 --oneline` to identify the current deployed baseline before editing.
- Stack: static HTML, CSS, and vanilla JavaScript PWA
- Backend: none
- Build step: none
- Package manager/dependencies: none
- Credentials/API keys: none are needed or stored

## Product intent

This is a simple, polished, mobile-first personal training app. The desired visual direction is restrained and Apple-like: clear typography, neutral surfaces, strong hierarchy, minimal choices, and no dashboard clutter.

The main workflow is deliberately shallow:

1. Open the app and choose `Workouts` or `Body Weight` from the top tabs.
2. The Workouts landing screen shows only the available days: Monday through Saturday.
3. Choose a day to see two choices: Mobility and that day's named workout.
4. Mobility immediately shows the full seven-move routine in order, with images, instructions, dose, and one Done checkbox per move.
5. Workout shows clear section cards. Each card lists its exercises and prescribed sets/reps.
6. Choose a section to see only that section's exercises, including images, instructions, and one simple checkbox for each prescribed set.
7. The selected day remains visible near the top inside workout and exercise-section views.

Do not restore weight/repetition entry fields for workouts unless the user explicitly asks. Workout tracking currently means checking off prescribed sets only. Prescribed set and rep text such as `4 x 8` remains visible.

## Current weekly program structure

The canonical exercise data is in `PROGRAM` in `app.js`. Never treat this summary as a replacement for reading the code before editing.

### Monday: Upper Strength + Anti-Extension

- A. Strength: Weighted Pull-ups, Landmine Press
- B. Posture / Control: Chest-supported Rows, Ring Pushups, Face Pulls
- C. Core (Tilt Drivers): Reverse Crunches, RKC Plank, Cable or Kneeling Crunch, Suitcase Carry

### Tuesday: Power + Carries (Posture-Safe)

- Power: Heavy Sled Push, Backward Sled Drag, Kettlebell Swings
- Carries: Farmer Carries
- Core Finisher: Hollow Body Hold only

### Wednesday: Corrective Reset + Glute Pump

- 1. Release + Reposition: Couch Stretch, Child's Pose + Knees-to-Chest, 90/90 Breathing
- 2. Activate (Weak Side): Dead Bug, Hollow Body Hold, Banded Hip Thrust
- 3. Integrate: Standing Wall Tilt Hold

### Thursday: Lower Body - Glute + Hamstring Priority

- 1. Squat + Hinge: Goblet Squats, Romanian Deadlift
- 2. Bulgarian Split Squats: Bulgarian Split Squats
- 3. Hip Thrusts: Barbell Hip Thrust
- 4. Hamstring Curls: Hamstring Curls
- 5. Core: Reverse Crunches, Hanging Knee Raises with Pelvic Curl

### Friday: Athletic Full Body (Posture-Safe)

One circuit in this exact order:

1. Inverted Rows
2. Pushups (Ribs Down)
3. Sled Push/Pull
4. Reverse Lunges
5. Hanging Knee Raises with Pelvic Curl
6. Banded Hip Thrusts
7. Suitcase Carry (Between Rounds)

### Saturday: Zone 2 + Decompression

- Conditioning: Zone 2 Incline Walk
- Recovery Flow: Couch Stretch, Child's Pose Breathing
- Decompression: Hanging Decompression
- Posture Practice: Standing Wall Tilt Hold
- There is no Reset section.

## Mobility routine

`MOBILITY_ROUTINE` in `app.js` is the canonical seven-move pre-workout routine. It currently contains:

1. 90/90 Hip Lift Breathing
2. Half-Kneeling Hip Flexor Stretch
3. Dead Bug
4. Glute Bridge with Posterior Pelvic Tilt
5. Serratus Wall Slides
6. Adductor Rockback
7. Open Book Thoracic Rotations

Mobility is informational and completion-based. Do not add weight, rep, or set-entry forms to it.

## Architecture and important files

- `index.html`: semantic shell, top navigation, Workouts view, Body Weight view, manifest/icon links.
- `styles.css`: all UI styling and responsive behavior.
- `app.js`: mobility data, exercise-image lookup, weekly program, state, rendering, checklists, body-weight chart, local persistence, and service-worker registration/status.
- `service-worker.js`: versioned offline app-shell cache and stale-while-revalidate asset handling.
- `manifest.webmanifest`: installable PWA metadata.
- `assets/mobility/`: seven 16:9 instructional mobility images.
- `assets/workouts/`: workout exercise reference images.
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
- `sets` is stored as a string but must parse to the number of checkboxes required.
- `reps` is display text and can contain values such as `8/leg`, `20-30 sec`, or `40 yards/side`.
- `sectionName` groups adjacent exercises into workout section cards.
- `instructionSections` is an array of `[heading, bulletPoints]` pairs.

Friday uses the existing `superset(id, label, exercises)` helper. Preserve its structure when changing that circuit.

### Images

Every workout exercise must map its stable ID in `EXERCISE_IMAGES` to a local image under `assets/workouts/` or an intentionally reused mobility image. The detail renderer only shows an image when this map contains the exercise ID.

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

`groupWorkoutItems()` groups normal exercises by the section/note string and treats supersets as their own group. To move an exercise between sections, update its section string and its position in `PROGRAM`. Keep section numbering and displayed order coherent.

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
