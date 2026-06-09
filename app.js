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

const PROGRAM = {
  Monday: {
    title: "Upper Strength + Posture",
    exercises: [
      exercise("weighted-pullups", "Weighted Pull-ups", "4", "5-8", "A. Strength", [
        ["Goal", ["upper body strength without feeding extension"]],
        ["Execution", ["ribs down", "abs lightly on", "avoid swinging or overextending"]]
      ]),
      exercise("weighted-dips", "Weighted Dips", "3", "6-8", "A. Strength", [
        ["Goal", ["strong chest/triceps while keeping pelvis and ribs stacked"]],
        ["Execution", ["chin slightly tucked", "no rib flare", "control the bottom"]]
      ]),
      exercise("landmine-press", "Landmine Press", "3", "8", "A. Strength", [
        ["Why", ["friendlier than heavy overhead pressing for rib flare and low-back extension"]],
        ["Execution", ["glutes engaged", "ribs down", "press without leaning back"]]
      ]),
      exercise("chest-supported-rows", "Chest-supported Rows", "4", "10", "B. Posture / Control", [
        ["Purpose", ["upper-back strength", "posture support without low-back fatigue"]],
        ["Execution", ["pause at the top", "keep chest supported", "do not shrug"]]
      ]),
      exercise("ring-pushups", "Ring Pushups", "3", "12", "B. Posture / Control", [
        ["Purpose", ["serratus control", "shoulder stability", "clean pressing pattern"]],
        ["Execution", ["ribs down", "body stays straight", "reach slightly at the top"]]
      ]),
      exercise("face-pulls", "Face Pulls", "3", "15", "B. Posture / Control", [
        ["Purpose", ["rear delts", "upper-back posture", "scap control"]],
        ["Execution", ["high elbows", "smooth reps", "do not arch to finish"]]
      ]),
      exercise("serratus-wall-slides-workout", "Serratus Wall Slides", "2", "15", "B. Posture / Control", [
        ["Purpose", ["rib cage and scap positioning", "reduce chest-dominant posture"]],
        ["Execution", ["forearms on wall", "ribs down", "reach slightly at top"]]
      ]),
      exercise("hanging-knee-raises-curl", "Hanging Knee Raises with Pelvic Curl", "3", "10-12", "C. Core", [
        ["Purpose", ["anti-extension core control", "pelvis control"]],
        ["Execution", ["curl pelvis slightly", "avoid hip-flexor dominance", "no swinging"]]
      ]),
      exercise("rkc-plank", "RKC Plank", "3", "20-30 sec", "C. Core", [
        ["Purpose", ["deep core tension", "ribs stacked over pelvis"]],
        ["Execution", ["squeeze glutes", "pull elbows toward toes", "breathe behind the brace"]]
      ]),
      exercise("wall-hollow-holds", "Wall-assisted Hollow Holds", "3", "20-30 sec", "D. Skill", [
        ["Use instead of handstands if needed", ["only handstand if ribs stay down and no banana back"]],
        ["Execution", ["low back controlled", "ribs down", "reach long"]]
      ])
    ]
  },
  Tuesday: {
    title: "Sprint + Athletic Core",
    exercises: [
      exercise("sprints", "Sprints", "10", "10-20 sec", "Sprint Work", [
        ["Prescription", ["6-10 rounds", "full recovery between sprints"]],
        ["Purpose", ["athleticism", "conditioning", "power"]]
      ]),
      exercise("sled-drags", "Sled Drags", "5", "rounds", "Post-sprint carries", [
        ["Purpose", ["posture", "core stabilization", "pelvis control"]],
        ["Execution", ["stay tall", "brace lightly", "steady steps"]]
      ]),
      exercise("farmer-carries", "Farmer Carries", "4", "rounds", "Post-sprint carries", [
        ["Purpose", ["posture", "grip", "core stabilization"]],
        ["Execution", ["ribs down", "walk tall", "do not lean side to side"]]
      ])
    ]
  },
  Thursday: {
    title: "Lower Body + Pelvic Stability",
    exercises: [
      exercise("goblet-squats", "Goblet Squats", "4", "8", "Lower Body", [
        ["Purpose", ["upright squat pattern", "controlled bracing", "clean lower-body strength"]]
      ]),
      exercise("bulgarian-split-squats", "Bulgarian Split Squats", "4", "8 each leg", "Lower Body", [
        ["Purpose", ["single-leg strength", "glute stability", "pelvic control"]]
      ]),
      exercise("barbell-hip-thrust", "Barbell Hip Thrust", "4", "10", "Lower Body", [
        ["Most important", ["no lumbar arch at top", "posterior pelvic tilt", "ribs down"]],
        ["Purpose", ["glute-mediated stability without low-back compensation"]]
      ]),
      exercise("hamstring-curls", "Hamstring Curls", "3", "12", "Lower Body", [
        ["Purpose", ["hamstrings as pelvic stabilizers", "posterior-chain support"]]
      ])
    ]
  },
  Friday: {
    title: "Athletic Full Body",
    exercises: [
      superset("athletic-circuit", "Athletic Full Body Circuit", [
        exercise("circuit-pullups", "Pullups", "5", "8-10", "Circuit"),
        exercise("circuit-pushups", "Pushups", "5", "20", "Circuit"),
        exercise("circuit-sled-push", "Sled Push", "5", "20 yards", "Circuit"),
        exercise("circuit-walking-lunges", "Walking Lunges", "5", "10/leg", "Circuit"),
        exercise("circuit-knee-raises", "Hanging Knee Raises with Pelvic Curl", "5", "12", "Circuit"),
        exercise("circuit-farmer-carry", "Farmer Carry", "5", "40 yards", "Circuit")
      ])
    ]
  },
  Saturday: {
    title: "Zone 2 Cardio",
    exercises: [
      exercise("zone-2-cardio", "Zone 2 Cardio", "1", "30-45 min", "Conditioning", [
        ["Prefer", ["incline walk", "bike", "rower"]],
        ["Goal", ["easy aerobic work", "recovery", "fat loss support"]]
      ]),
      exercise("couch-stretch", "Couch Stretch", "1", "45 sec/side", "Mobility / Recovery Flow", [
        ["Purpose", ["open hip flexors without feeding extension"]],
        ["Execution", ["glute squeezed", "pelvis tucked", "ribs down"]]
      ]),
      exercise("thoracic-rotations", "Thoracic Rotations", "1", "10/side", "Mobility / Recovery Flow", [
        ["Purpose", ["upper-back rotation", "reduce low-back compensation"]],
        ["Execution", ["knees stable", "rotate through upper back"]]
      ]),
      exercise("childs-pose-breathing", "Child's Pose Breathing", "1", "5 breaths", "Mobility / Recovery Flow", [
        ["Purpose", ["downshift", "ribs", "breathing mechanics"]],
        ["Execution", ["long exhale", "breathe into back ribs"]]
      ]),
      exercise("adductor-mobility", "Adductor Mobility", "1", "10/side", "Mobility / Recovery Flow", [
        ["Purpose", ["groin mobility", "pelvic control"]],
        ["Execution", ["neutral spine", "ribs down", "slow range"]]
      ]),
      exercise("hanging-decompression", "Hanging Decompression", "3", "30-45 sec", "Decompression", [
        ["Purpose", ["spinal unloading", "shoulder opening"]],
        ["Execution", ["relax into hang", "breathe slowly", "no aggressive arching"]]
      ]),
      exercise("reset-breathing-again", "90/90 Breathing Again", "2", "5 breaths", "Reset", [
        ["Purpose", ["finish stacked", "reduce lumbar extension", "reconnect abs and hamstrings"]],
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
  openItem: "",
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
      state.openItem = "";
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
      state.openItem = "";
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
    <button class="primary-button wide save-bottom" type="button" id="saveWorkout">Save Workout</button>
  `;

  bindBack();
  els.workoutScreen.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
      state.openItem = state.openItem === button.dataset.open ? "" : button.dataset.open;
      renderWorkout();
    });
  });

  els.workoutScreen.querySelectorAll("[data-field]").forEach((input) => {
    input.addEventListener("input", () => updateSet(input));
    input.addEventListener("change", () => updateSet(input));
  });

  els.workoutScreen.querySelectorAll("[data-add-set]").forEach((button) => {
    button.addEventListener("click", () => {
      adjustSetCount(button.dataset.addSet, 1);
      renderWorkout();
    });
  });

  els.workoutScreen.querySelectorAll("[data-remove-set]").forEach((button) => {
    button.addEventListener("click", () => {
      adjustSetCount(button.dataset.removeSet, -1);
      renderWorkout();
    });
  });

  document.querySelector("#saveWorkout").addEventListener("click", () => {
    writeStore(STORAGE_KEYS.workouts, state.workouts);
    showToast("Workout saved");
  });
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
  const isOpen = state.openItem === item.id;
  return `
    <article class="exercise-row ${isOpen ? "is-open" : ""}">
      <button class="exercise-line" type="button" data-open="${item.id}">
        <span>
          <strong>${item.title}</strong>
          <small>${item.sets} x ${item.reps}</small>
        </span>
      </button>
      ${isOpen ? renderWorkoutDetail(item) : ""}
    </article>
  `;
}

function renderSuperset(group) {
  const isOpen = state.openItem === group.id;
  const groupType = groupLabel(group);
  return `
    <article class="exercise-row ${isOpen ? "is-open" : ""}">
      <button class="exercise-line group-line" type="button" data-open="${group.id}">
        <span>
          <strong>${group.label}</strong>
          <ul class="group-preview">
            ${group.exercises.map((item) => `<li>${item.title} <em>${item.sets} x ${item.reps}</em></li>`).join("")}
          </ul>
        </span>
        <span class="pill">${groupType}</span>
      </button>
      ${isOpen ? `
        <div class="superset-body">
          ${group.exercises.map((item) => `
            <div class="superset-exercise">
              ${renderWorkoutDetail(item)}
            </div>
          `).join("")}
        </div>
      ` : ""}
    </article>
  `;
}

function groupLabel(group) {
  return group.label.toLowerCase().includes("circuit") ? "Circuit" : "Superset";
}

function renderWorkoutDetail(item) {
  return `
    <div class="workout-detail">
      <div class="mobility-header workout-header">
        <p>${item.title}</p>
        <span>(${item.note})</span>
      </div>
      <div class="workout-content">
        <span class="pill">${item.sets} x ${item.reps}</span>
        ${renderSetGrid(item)}
      </div>
    </div>
  `;
}

function renderSetGrid(item) {
  const log = getWorkoutLog();
  const savedSets = getExerciseSets(log, item);
  const rows = savedSets.map((saved, setIndex) => {
    return `
      <div class="set-row">
        <div>${setIndex + 1}</div>
        <div><input aria-label="${item.title} set ${setIndex + 1} weight" type="number" inputmode="decimal" min="0" step="2.5" placeholder="0" value="${saved.weight || ""}" data-field="weight" data-exercise="${item.id}" data-set="${setIndex}"></div>
        <div><input aria-label="${item.title} set ${setIndex + 1} reps" type="number" inputmode="decimal" min="0" step="1" placeholder="${item.reps}" value="${saved.reps || ""}" data-field="reps" data-exercise="${item.id}" data-set="${setIndex}"></div>
        <div><input aria-label="${item.title} set ${setIndex + 1} complete" type="checkbox" ${saved.done ? "checked" : ""} data-field="done" data-exercise="${item.id}" data-set="${setIndex}"></div>
      </div>
    `;
  }).join("");

  return `
    <div class="set-controls">
      <button type="button" data-add-set="${item.id}">+ Set</button>
      <button type="button" data-remove-set="${item.id}" ${savedSets.length <= 1 ? "disabled" : ""}>Remove Set</button>
    </div>
    <div class="set-grid">
      <div class="set-row header">
        <div>Set</div>
        <div>Weight</div>
        <div>Reps</div>
        <div>Done</div>
      </div>
      ${rows}
    </div>
  `;
}

function getExerciseSets(log, item) {
  const defaultCount = Math.max(1, Number(item.sets) || 1);
  if (!log.exercises[item.id]) log.exercises[item.id] = [];

  while (log.exercises[item.id].length < defaultCount) {
    log.exercises[item.id].push({});
  }

  return log.exercises[item.id];
}

function adjustSetCount(exerciseId, delta) {
  const log = getWorkoutLog();
  if (!log.exercises[exerciseId]) log.exercises[exerciseId] = [{}];

  if (delta > 0) {
    log.exercises[exerciseId].push({});
  } else if (log.exercises[exerciseId].length > 1) {
    log.exercises[exerciseId].pop();
  }

  persistWorkoutLog(log);
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
      state.openItem = "";
    } else {
      state.day = "";
    }
    renderWorkoutScreen();
  });
}

function updateSet(input) {
  const log = getWorkoutLog();
  const exerciseId = input.dataset.exercise;
  const setIndex = input.dataset.set;
  const field = input.dataset.field;

  if (!log.exercises[exerciseId]) log.exercises[exerciseId] = [];
  if (!log.exercises[exerciseId][setIndex]) log.exercises[exerciseId][setIndex] = {};
  log.exercises[exerciseId][setIndex][field] = field === "done" ? input.checked : input.value;
  persistWorkoutLog(log);
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
