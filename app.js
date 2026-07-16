const MOBILITY_ROUTINE = [
  {
    id: "hip-lift",
    title: "90/90 Hip Lift Breathing",
    subtitle: "IMPORTANT: use the version with feet on wall",
    image: "assets/mobility/01-hip-lift-native.png",
    dose: "2 sets x 5 breaths",
    sections: [
      ["Do", ["Full exhale through mouth for 5-6 sec", "Feel ribs come down", "Pause 2 sec", "Inhale through nose quietly"]],
      ["Feel", ["hamstrings", "abs", "less pressure in low back"]],
      ["Avoid", ["quads", "hip flexors"]]
    ]
  },
  {
    id: "hip-flexor",
    title: "Half-Kneeling Hip Flexor Stretch",
    subtitle: "THIS exact version",
    image: "assets/mobility/02-hip-flexor-native.png",
    dose: "45 sec each side",
    sections: [
      ["Most important", ["Before leaning forward: squeeze glute of kneeling leg", "Tuck pelvis slightly", "Then gently move hips forward"]],
      ["Do not", ["arch low back", "lean excessively"]],
      ["Feel", ["front of hip/thigh stretching"]]
    ]
  },
  {
    id: "dead-bug",
    title: "Dead Bug",
    subtitle: "THIS exact controlled version",
    image: "assets/mobility/03-dead-bug-native.png",
    dose: "2 sets x 8 per side",
    sections: [
      ["Movement", ["Slowly extend opposite arm + leg", "Return", "Alternate sides"]],
      ["Most important", ["Your low back cannot arch", "If it arches, shorten the range"]],
      ["Tempo", ["slow and controlled"]]
    ]
  },
  {
    id: "glute-bridge",
    title: "Glute Bridge with Posterior Pelvic Tilt",
    subtitle: "Not the hyperextended version",
    image: "assets/mobility/04-glute-bridge-native.png",
    dose: "2 sets x 12",
    sections: [
      ["Before lifting", ["tuck pelvis slightly", "flatten low back slightly", "then bridge up"]],
      ["At top", ["squeeze glutes", "ribs stay down", "do not arch back"]],
      ["Feel", ["glutes", "not low back"]]
    ]
  },
  {
    id: "wall-slides",
    title: "Serratus Wall Slides",
    subtitle: "Exact wall version",
    image: "assets/mobility/05-wall-slides-native.png",
    dose: "2 sets x 12",
    sections: [
      ["Movement", ["Slowly slide arms upward", "Reach slightly at top"]],
      ["Do not", ["arch low back", "flare ribs"]],
      ["Feel", ["side of ribs", "upper abs", "serratus muscles"]]
    ]
  },
  {
    id: "adductor-rockback",
    title: "Adductor Rockback",
    subtitle: "THIS version",
    image: "assets/mobility/06-adductor-rockback-native.png",
    dose: "10 each side",
    sections: [
      ["Movement", ["Sit hips backward slowly", "Return"]],
      ["Keep", ["spine neutral", "ribs down"]],
      ["Feel", ["inner thigh/groin mobility"]]
    ]
  },
  {
    id: "open-book",
    title: "Open Book Thoracic Rotations",
    subtitle: "THIS exact version",
    image: "assets/mobility/07-open-book-native.png",
    dose: "10 each side",
    sections: [
      ["Movement", ["Rotate upper arm across body", "Open chest toward opposite side"]],
      ["Keep", ["knees stacked", "low back stable"]],
      ["Feel", ["upper/mid back rotation", "not low back twisting"]]
    ]
  }
];

const EXERCISE_IMAGES = {
  "pc-rkc-plank": "assets/workouts/rkc-plank.png",
  "pc-reverse-crunches": "assets/workouts/reverse-crunch.png",
  "pc-reverse-crunch-thu": "assets/workouts/reverse-crunch.png",
  "pc-landmine-press": "assets/workouts/landmine-press.png",
  "pc-ring-pushups": "assets/workouts/ring-pushup.png",
  "pc-face-pulls": "assets/workouts/face-pull.png",
  "pc-kb-swings": "assets/workouts/kb-swing.png",
  "pc-couch-stretch-wed": "assets/workouts/couch-stretch.png",
  "pc-couch-stretch-sat": "assets/workouts/couch-stretch.png",
  "pc-wall-tilt-drill": "assets/workouts/wall-tilt.png",
  "pc-wall-tilt-sat": "assets/workouts/wall-tilt.png",
  "pc-circuit-knee-raises": "assets/workouts/hanging-knee-raise.png",
  "pc-dead-bug-wed": "assets/mobility/03-dead-bug-native.png",
  "pc-9090-breathing-wed": "assets/mobility/01-hip-lift-native.png",
  "pc-9090-finish": "assets/mobility/01-hip-lift-native.png"
};

const PROGRAM = {
  Monday: {
    title: "Upper Strength + Anti-Extension",
    exercises: [
      exercise("pc-weighted-pullups", "Weighted Pull-ups", "4", "5-8", "A. Strength", [
        ["Goal", ["upper strength without arching into extension"]],
        ["Execution", ["ribs down", "slight posterior tilt at the bottom", "no swinging"]]
      ]),
      exercise("pc-landmine-press", "Landmine Press", "4", "8", "A. Strength", [
        ["Why", ["pressing without leaning back or flaring ribs"]],
        ["Execution", ["glutes squeezed", "ribs stacked over pelvis", "exhale as you press"]]
      ]),
      exercise("pc-chest-supported-rows", "Chest-supported Rows", "4", "10", "B. Posture / Control", [
        ["Purpose", ["upper-back strength with zero low-back load"]],
        ["Execution", ["pause at the top", "no shrugging", "chest stays glued to pad"]]
      ]),
      exercise("pc-ring-pushups", "Ring Pushups", "3", "12", "B. Posture / Control", [
        ["Purpose", ["serratus control", "anti-extension under load"]],
        ["Execution", ["hard RKC-style body line", "ribs down", "reach at the top"]]
      ]),
      exercise("pc-face-pulls", "Face Pulls", "3", "15", "B. Posture / Control", [
        ["Purpose", ["rear delts", "scap control"]],
        ["Execution", ["high elbows", "do not arch to finish reps"]]
      ]),
      exercise("pc-reverse-crunches", "Reverse Crunches", "3", "12-15", "C. Core (Tilt Drivers)", [
        ["Why", ["directly trains posterior pelvic tilt", "the #1 core pattern for your fix"]],
        ["Execution", ["curl pelvis toward ribs", "slow lower", "no leg-swing momentum"]]
      ]),
      exercise("pc-rkc-plank", "RKC Plank", "3", "20-30 sec", "C. Core (Tilt Drivers)", [
        ["Purpose", ["max-tension anti-extension", "glutes + abs co-contraction"]],
        ["Execution", ["posterior tilt", "squeeze glutes hard", "pull elbows toward toes"]]
      ]),
      exercise("pc-suitcase-carry", "Suitcase Carry", "3", "40 yards/side", "C. Core (Tilt Drivers)", [
        ["Purpose", ["standing core control", "trains your new posture under load"]],
        ["Execution", ["ribs stacked", "do not lean or arch", "walk tall"]]
      ])
    ]
  },
  Tuesday: {
    title: "Power + Carries (Posture-Safe)",
    exercises: [
      exercise("pc-hill-sprints", "Hill or Incline Sprints", "8", "10-15 sec", "Sprint Work", [
        ["Why hill", ["forward lean reduces lumbar extension vs flat sprinting"]],
        ["Prescription", ["full recovery between reps", "stop the session if low back tightens"]]
      ]),
      exercise("pc-sled-push", "Sled Push", "5", "20 yards", "Power", [
        ["Purpose", ["posterior chain power with zero spinal extension"]],
        ["Execution", ["45-degree body line", "drive through whole foot"]]
      ]),
      exercise("pc-kb-swings", "Kettlebell Swings", "4", "12", "Power", [
        ["Purpose", ["explosive hip hinge", "glute snap finish"]],
        ["Most important", ["finish with glutes + posterior tilt, not a back arch", "if you feel low back, stop and reset"]]
      ]),
      exercise("pc-farmer-carries", "Farmer Carries", "4", "40 yards", "Carries", [
        ["Purpose", ["posture under load", "grip", "core stabilization"]],
        ["Execution", ["ribs down", "tall spine", "no side lean"]]
      ])
    ]
  },
  Wednesday: {
    title: "Corrective Reset + Glute Pump",
    exercises: [
      exercise("pc-couch-stretch-wed", "Couch Stretch", "2", "90 sec/side", "1. Release (Tight Side)", [
        ["Purpose", ["long-duration hip flexor opening", "the main restriction feeding your tilt"]],
        ["Execution", ["glute squeezed", "pelvis tucked before leaning", "breathe slowly"]]
      ]),
      exercise("pc-ql-stretch", "Child's Pose + Knees-to-Chest", "2", "60 sec each", "1. Release (Tight Side)", [
        ["Purpose", ["unload lumbar erectors and QL"]],
        ["Execution", ["long exhales", "let the low back round gently"]]
      ]),
      exercise("pc-9090-breathing-wed", "90/90 Breathing (Feet on Wall)", "2", "5 breaths", "2. Reposition", [
        ["Purpose", ["restack ribs over pelvis", "turn hamstrings and abs on"]],
        ["Execution", ["full 5-6 sec exhale", "pause", "quiet nasal inhale"]]
      ]),
      exercise("pc-dead-bug-wed", "Dead Bug", "3", "8/side", "3. Activate (Weak Side)", [
        ["Most important", ["low back stays pressed flat the entire time"]],
        ["Execution", ["slow", "shorten range if back arches"]]
      ]),
      exercise("pc-banded-hip-thrust", "Banded Hip Thrust (Tilt Focus)", "3", "15", "3. Activate (Weak Side)", [
        ["Purpose", ["high-rep glute pump in posterior tilt"]],
        ["Execution", ["tuck pelvis first", "squeeze 2 sec at top", "ribs down"]]
      ]),
      exercise("pc-wall-tilt-drill", "Standing Wall Tilt Hold", "3", "60 sec", "4. Integrate", [
        ["Why this matters most", ["this is your new default standing posture", "practice it until it is automatic"]],
        ["Execution", ["flatten low back toward wall", "step away and hold the position", "breathe normally"]]
      ])
    ]
  },
  Thursday: {
    title: "Lower Body — Glute + Hamstring Priority",
    exercises: [
      exercise("pc-barbell-hip-thrust", "Barbell Hip Thrust", "4", "8-10", "A. Primary (Glutes First)", [
        ["Why first", ["glutes are the #1 muscle that pulls your pelvis back to neutral", "train them freshest"]],
        ["Most important", ["posterior tilt at top", "no lumbar arch", "ribs down"]]
      ]),
      exercise("pc-rdl", "Romanian Deadlift", "4", "8", "A. Primary (Glutes First)", [
        ["Why", ["builds hamstrings at length — the muscles that anchor your pelvis from behind"]],
        ["Execution", ["hinge, do not squat it", "flat back, soft knees", "stand up with glutes, no arch at lockout"]]
      ]),
      exercise("pc-bulgarian-split-squats", "Bulgarian Split Squats (Glute Bias)", "3", "8/leg", "B. Secondary", [
        ["Purpose", ["single-leg glute strength", "pelvic control"]],
        ["Execution", ["slight forward torso lean", "pelvis tucked", "push through heel"]]
      ]),
      exercise("pc-hamstring-curls", "Hamstring Curls", "3", "12", "B. Secondary", [
        ["Purpose", ["direct hamstring volume", "pelvic stabilizers"]]
      ]),
      exercise("pc-goblet-squats", "Goblet Squats", "3", "8", "B. Secondary", [
        ["Purpose", ["quad strength kept in the program, demoted from priority"]],
        ["Execution", ["brace with slight tuck", "no butt-wink chasing depth"]]
      ]),
      exercise("pc-reverse-crunch-thu", "Reverse Crunches", "3", "12-15", "C. Core", [
        ["Purpose", ["end every lower day owning posterior tilt"]],
        ["Execution", ["slow eccentric", "no momentum"]]
      ])
    ]
  },
  Friday: {
    title: "Athletic Full Body (Posture-Safe)",
    exercises: [
      superset("pc-athletic-circuit", "Posture-Safe Athletic Circuit", [
        exercise("pc-circuit-pullups", "Pullups", "5", "8-10", "Circuit"),
        exercise("pc-circuit-pushups", "Pushups (Ribs Down)", "5", "15-20", "Circuit"),
        exercise("pc-circuit-sled-push", "Sled Push", "5", "20 yards", "Circuit"),
        exercise("pc-circuit-reverse-lunges", "Reverse Lunges", "5", "10/leg", "Circuit", [
          ["Why reverse", ["easier to keep pelvis tucked than walking lunges"]]
        ]),
        exercise("pc-circuit-knee-raises", "Hanging Knee Raises with Pelvic Curl", "5", "12", "Circuit"),
        exercise("pc-circuit-suitcase-carry", "Suitcase Carry", "5", "40 yards/side", "Circuit")
      ])
    ]
  },
  Saturday: {
    title: "Zone 2 + Decompression",
    exercises: [
      exercise("pc-zone-2", "Zone 2 Cardio", "1", "30-45 min", "Conditioning", [
        ["Prefer", ["incline walk", "bike", "rower"]],
        ["Goal", ["aerobic base", "recovery", "leanness support"]]
      ]),
      exercise("pc-couch-stretch-sat", "Couch Stretch", "1", "90 sec/side", "Recovery Flow", [
        ["Execution", ["glute squeezed", "pelvis tucked", "ribs down"]]
      ]),
      exercise("pc-childs-pose-sat", "Child's Pose Breathing", "1", "5 breaths", "Recovery Flow", [
        ["Execution", ["long exhale", "breathe into back ribs"]]
      ]),
      exercise("pc-hanging-decompression", "Hanging Decompression", "3", "30-45 sec", "Decompression", [
        ["Purpose", ["spinal unloading"]],
        ["Execution", ["relax into the hang", "no aggressive arching"]]
      ]),
      exercise("pc-wall-tilt-sat", "Standing Wall Tilt Hold", "3", "60 sec", "Posture Practice", [
        ["Purpose", ["rehearse your new default standing position"]],
        ["Execution", ["flatten low back toward wall", "step away", "hold and breathe"]]
      ]),
      exercise("pc-9090-finish", "90/90 Breathing Finish", "2", "5 breaths", "Reset", [
        ["Execution", ["full exhale", "ribs down", "quiet inhale"]]
      ])
    ]
  }
};

const DAYS = Object.keys(PROGRAM);
const STORAGE_KEYS = {
  workouts: "training-log.workouts.v11",
  weights: "training-log.weights.v11"
};

const state = {
  view: "workouts",
  day: "",
  section: "",
  workouts: readStore(STORAGE_KEYS.workouts, {}),
  weights: readStore(STORAGE_KEYS.weights, [])
};

const els = {
  tabs: document.querySelectorAll(".tab"),
  workoutsView: document.querySelector("#workoutsView"),
  weightView: document.querySelector("#weightView"),
  workoutScreen: document.querySelector("#workoutScreen"),
  weightForm: document.querySelector("#weightForm"),
  weightDate: document.querySelector("#weightDate"),
  weightValue: document.querySelector("#weightValue"),
  trendTitle: document.querySelector("#trendTitle"),
  trendDelta: document.querySelector("#trendDelta"),
  weightChart: document.querySelector("#weightChart"),
  weightHistory: document.querySelector("#weightHistory"),
  appStatus: document.querySelector("#appStatus"),
  toast: document.querySelector("#toast")
};

init();

function init() {
  els.weightDate.value = toDateInput(new Date());
  bindEvents();
  setupAppReliability();
  render();
}

function bindEvents() {
  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.view = tab.dataset.view;
      render();
    });
  });

  els.weightForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const entry = {
      date: els.weightDate.value,
      weight: Number(els.weightValue.value)
    };

    if (!entry.date || !entry.weight) return;

    state.weights = state.weights.filter((item) => item.date !== entry.date);
    state.weights.push(entry);
    state.weights.sort((a, b) => a.date.localeCompare(b.date));
    writeStore(STORAGE_KEYS.weights, state.weights);
    els.weightValue.value = "";
    renderWeight();
    showToast("Weight saved");
  });
}

function render() {
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === state.view));
  els.workoutsView.classList.toggle("is-active", state.view === "workouts");
  els.weightView.classList.toggle("is-active", state.view === "weight");

  if (state.view === "workouts") renderWorkoutScreen();
  if (state.view === "weight") renderWeight();
}

function renderWorkoutScreen() {
  if (!state.day) {
    renderDayList();
    return;
  }

  if (!state.section) {
    renderDayChoices();
    return;
  }

  if (state.section === "mobility") renderMobility();
  if (state.section === "workout") renderWorkout();
}

function renderDayList() {
  els.workoutScreen.innerHTML = `
    <div class="day-list">
      ${DAYS.map((day) => `<button class="day-card" type="button" data-day="${day}">${day}</button>`).join("")}
    </div>
  `;

  els.workoutScreen.querySelectorAll("[data-day]").forEach((button) => {
    button.addEventListener("click", () => {
      state.day = button.dataset.day;
      state.section = "";
      renderWorkoutScreen();
    });
  });
}

function renderDayChoices() {
  const program = PROGRAM[state.day];
  els.workoutScreen.innerHTML = `
    ${subnav(state.day)}
    <div class="choice-list">
      <button class="choice-card" type="button" data-section="mobility">
        <span>Mobility</span>
        <strong>${MOBILITY_ROUTINE.length} moves</strong>
      </button>
      <button class="choice-card" type="button" data-section="workout">
        <span>${program.title}</span>
        <strong>Workout</strong>
      </button>
    </div>
  `;

  bindBack();
  els.workoutScreen.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => {
      state.section = button.dataset.section;
      renderWorkoutScreen();
    });
  });
}

function renderMobility() {
  const log = getWorkoutLog();

  els.workoutScreen.innerHTML = `
    ${subnav("Mobility")}
    <div class="mobility-intro">
      <strong>Full Pre-Workout Posture Reset</strong>
      <span>10-15 mins. Do these in this exact order before every workout.</span>
    </div>
    <div class="mobility-list">
      ${MOBILITY_ROUTINE.map((item, index) => renderMobilityCard(item, index, log)).join("")}
    </div>
  `;

  bindBack();
  els.workoutScreen.querySelectorAll("[data-mobility]").forEach((input) => {
    input.addEventListener("change", () => {
      log.mobility[input.dataset.mobility] = input.checked;
      persistWorkoutLog(log);
    });
  });
}

function renderMobilityCard(item, index, log) {
  return `
    <article class="mobility-card">
      <div class="mobility-header">
        <p>${index + 1}. ${item.title}</p>
        <span>(${item.subtitle})</span>
      </div>
      <img class="mobility-image" src="${item.image}" alt="${item.title} reference">
      <div class="mobility-content">
        <label class="mobility-check">
          <input class="check" type="checkbox" data-mobility="${item.id}" ${log.mobility[item.id] ? "checked" : ""}>
          <span>Done</span>
        </label>
        <span class="pill">${item.dose}</span>
        <div class="mobility-notes">
          ${item.sections.map(([heading, points]) => `
            <section>
              <strong>${heading}</strong>
              <ul>
                ${points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </section>
          `).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderWorkout() {
  const program = PROGRAM[state.day];
  els.workoutScreen.innerHTML = `
    ${subnav(program.title)}
    ${renderWorkoutSections(program.exercises)}
  `;

  bindBack();
}

function renderWorkoutSections(items) {
  const sections = groupWorkoutItems(items);

  return `
    <div class="workout-sections">
      ${sections.map((section) => `
        <section class="workout-section">
          <h3>${section.title}</h3>
          <div class="workout-list">
            ${section.items.map((item) => item.type === "superset" ? renderSuperset(item) : renderSingleExercise(item)).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  `;
}

function groupWorkoutItems(items) {
  const sections = [];

  items.forEach((item) => {
    const title = item.type === "superset" ? groupLabel(item) : item.note;
    let section = sections.find((entry) => entry.title === title);
    if (!section) {
      section = { title, items: [] };
      sections.push(section);
    }
    section.items.push(item);
  });

  return sections;
}

function renderSingleExercise(item) {
  return renderWorkoutDetail(item);
}

function renderSuperset(group) {
  const groupType = groupLabel(group);
  return `
    <div class="workout-group">
      <div class="workout-group-header">
        <strong>${group.label}</strong>
        <span class="pill">${groupType}</span>
      </div>
      <div class="workout-group-list">
        ${group.exercises.map((item) => renderWorkoutDetail(item)).join("")}
      </div>
    </div>
  `;
}

function groupLabel(group) {
  return group.label.toLowerCase().includes("circuit") ? "Circuit" : "Superset";
}

function renderWorkoutDetail(item) {
  return `
    <article class="mobility-card workout-card">
      <div class="mobility-header workout-header">
        <p>${item.title}</p>
        <span>(${item.note})</span>
      </div>
      ${EXERCISE_IMAGES[item.id] ? `<img class="mobility-image" src="${EXERCISE_IMAGES[item.id]}" alt="${item.title} form reference">` : ""}
      <div class="workout-content">
        <span class="pill">${item.sets} x ${item.reps}</span>
        ${item.sections.length ? `
          <div class="mobility-notes">
            ${item.sections.map(([heading, points]) => `
              <section>
                <strong>${heading}</strong>
                <ul>
                  ${points.map((point) => `<li>${point}</li>`).join("")}
                </ul>
              </section>
            `).join("")}
          </div>
        ` : ""}
      </div>
    </article>
  `;
}

function subnav(title) {
  return `
    <div class="subnav">
      <button class="back-button" type="button" data-back>Back</button>
      <h2>${title}</h2>
    </div>
  `;
}

function bindBack() {
  const back = els.workoutScreen.querySelector("[data-back]");
  if (!back) return;

  back.addEventListener("click", () => {
    if (state.section) {
      state.section = "";
    } else {
      state.day = "";
    }
    renderWorkoutScreen();
  });
}

function renderWeight() {
  const entries = [...state.weights].sort((a, b) => a.date.localeCompare(b.date));
  const recent = entries.slice(-10);

  if (!entries.length) {
    els.trendTitle.textContent = "No entries yet";
    els.trendDelta.textContent = "0.0 lb";
    els.weightChart.innerHTML = emptyChart();
    els.weightHistory.innerHTML = `<p class="muted">Add today's weight to start building your trend.</p>`;
    return;
  }

  const first = entries[0];
  const last = entries[entries.length - 1];
  const delta = last.weight - first.weight;
  els.trendTitle.textContent = `${last.weight.toFixed(1)} lb latest`;
  els.trendDelta.textContent = `${delta >= 0 ? "+" : ""}${delta.toFixed(1)} lb`;
  els.weightChart.innerHTML = drawChart(recent);
  els.weightHistory.innerHTML = entries.slice(-7).reverse().map((entry) => `
    <div class="history-row">
      <span>${formatDate(entry.date)}</span>
      <strong>${entry.weight.toFixed(1)} lb</strong>
    </div>
  `).join("");
}

function getWorkoutKey() {
  return `${toDateInput(new Date())}:${state.day}`;
}

function getWorkoutLog() {
  const key = getWorkoutKey();
  if (!state.workouts[key]) {
    state.workouts[key] = { day: state.day, date: toDateInput(new Date()), mobility: {}, exercises: {} };
  }
  return state.workouts[key];
}

function persistWorkoutLog(log) {
  state.workouts[getWorkoutKey()] = log;
  writeStore(STORAGE_KEYS.workouts, state.workouts);
}

function exercise(id, title, sets, reps, note, sections = []) {
  return { type: "exercise", id, title, sets, reps, note, sections };
}

function superset(id, label, exercises) {
  return { type: "superset", id, label, exercises };
}

function drawChart(entries) {
  const width = 640;
  const height = 260;
  const pad = 34;
  const weights = entries.map((entry) => entry.weight);
  const min = Math.min(...weights) - 1;
  const max = Math.max(...weights) + 1;
  const span = Math.max(1, max - min);
  const xStep = entries.length > 1 ? (width - pad * 2) / (entries.length - 1) : 0;
  const points = entries.map((entry, index) => {
    const x = pad + index * xStep;
    const y = height - pad - ((entry.weight - min) / span) * (height - pad * 2);
    return { x, y };
  });
  const path = points.map((point, index) => `${index ? "L" : "M"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const area = `${path} L ${points[points.length - 1].x.toFixed(1)} ${height - pad} L ${pad} ${height - pad} Z`;

  return `
    <defs>
      <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#315d8d" stop-opacity="0.18"></stop>
        <stop offset="1" stop-color="#315d8d" stop-opacity="0"></stop>
      </linearGradient>
    </defs>
    <rect width="640" height="260" fill="#ffffff"></rect>
    <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#e5e7eb"></line>
    <path d="${area}" fill="url(#lineFill)"></path>
    <path d="${path}" fill="none" stroke="#315d8d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
    ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="6" fill="#ffffff" stroke="#315d8d" stroke-width="3"></circle>`).join("")}
    <text x="${pad}" y="28" fill="#70737a" font-size="13" font-weight="700">${max.toFixed(1)} lb</text>
    <text x="${pad}" y="${height - 10}" fill="#70737a" font-size="13" font-weight="700">${min.toFixed(1)} lb</text>
  `;
}

function emptyChart() {
  return `
    <rect width="640" height="260" fill="#ffffff"></rect>
    <line x1="34" y1="210" x2="606" y2="210" stroke="#e5e7eb"></line>
    <path d="M 54 188 C 146 122, 232 145, 318 112 S 480 78, 586 94" fill="none" stroke="#d2d6dc" stroke-width="4" stroke-linecap="round"></path>
    <text x="320" y="132" text-anchor="middle" fill="#70737a" font-size="16" font-weight="700">Your trend will appear here</text>
  `;
}

function readStore(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function setupAppReliability() {
  updateConnectionStatus();
  window.addEventListener("online", updateConnectionStatus);
  window.addEventListener("offline", updateConnectionStatus);

  if (!("serviceWorker" in navigator)) {
    setAppStatus(navigator.onLine ? "Online" : "Offline");
    return;
  }

  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data && event.data.type === "APP_READY") {
      setAppStatus("Offline ready");
    }
  });

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    setAppStatus("Offline ready");
  });

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./service-worker.js");
      setAppStatus(navigator.serviceWorker.controller ? "Offline ready" : "Caching");

      if (registration.waiting || registration.active) {
        setAppStatus("Offline ready");
      }

      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        if (!worker) return;

        setAppStatus("Updating");
        worker.addEventListener("statechange", () => {
          if (worker.state === "installed") {
            setAppStatus("Offline ready");
          }
        });
      });
    } catch {
      setAppStatus(navigator.onLine ? "Online" : "Offline");
    }
  });
}

function updateConnectionStatus() {
  if (!navigator.onLine) {
    setAppStatus("Offline");
    return;
  }

  if (!("serviceWorker" in navigator)) {
    setAppStatus("Online");
    return;
  }

  setAppStatus(navigator.serviceWorker.controller ? "Offline ready" : "Online");
}

function setAppStatus(message) {
  if (!els.appStatus) return;
  els.appStatus.textContent = message;
  els.appStatus.dataset.status = message.toLowerCase().replace(/\s+/g, "-");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 1600);
}

function toDateInput(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}
