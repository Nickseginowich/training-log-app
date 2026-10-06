const MOBILITY_ROUTINE = [
  {
    "id": "hip-lift",
    "title": "90/90 Wall Breathing",
    "subtitle": "Feet on wall",
    "image": "assets/mobility/01-hip-lift-native.png",
    "dose": "2 x 5 breaths",
    "sections": [
      [
        "Setup",
        [
          "Lie on your back, feet on wall, hips and knees around 90 degrees.",
          "Gently draw heels down without sliding; feel the hamstrings engage."
        ]
      ],
      [
        "Focus",
        [
          "Comfortable ribs-over-pelvis position."
        ]
      ],
      [
        "Cues",
        [
          "Feet on wall, hips/knees near 90 degrees; gently engage hamstrings, exhale slowly, then breathe into sides/back of ribs."
        ]
      ],
      [
        "Avoid",
        [
          "Forcing the lower back flat or straining to tuck."
        ]
      ],
      [
        "Feel",
        [
          "Hamstrings and deep abs; expansion through back and side ribs."
        ]
      ]
    ]
  },
  {
    "id": "dead-bug",
    "title": "Dead Bug",
    "subtitle": "Slow, controlled reach",
    "image": "assets/mobility/03-dead-bug-native.png",
    "dose": "2 x 8-12/side",
    "sections": [
      [
        "Setup",
        [
          "Lie on your back with arms vertical and hips/knees around 90 degrees."
        ]
      ],
      [
        "Focus",
        [
          "Trunk control with steady ribs and pelvis."
        ]
      ],
      [
        "Cues",
        [
          "Extend opposite arm/leg slowly; exhale as you reach."
        ]
      ],
      [
        "Avoid",
        [
          "Increasing the low-back arch or reaching beyond control."
        ]
      ],
      [
        "Feel",
        [
          "Abs working without an increase in low-back arch."
        ]
      ]
    ]
  },
  {
    "id": "hip-flexor",
    "title": "Half-Kneeling Hip-Flexor Mobilization",
    "subtitle": "Controlled hip movement",
    "image": "assets/mobility/02-hip-flexor-native.png",
    "dose": "2 x 8-10/side",
    "sections": [
      [
        "Setup",
        [
          "One knee down, opposite foot forward, torso tall."
        ]
      ],
      [
        "Focus",
        [
          "Controlled hip extension."
        ]
      ],
      [
        "Cues",
        [
          "Lightly squeeze the kneeling-side glute; glide forward from the hip."
        ]
      ],
      [
        "Avoid",
        [
          "Arching the lower back or forcing end range."
        ]
      ],
      [
        "Feel",
        [
          "A gentle stretch at the front of the kneeling-side hip/thigh."
        ]
      ]
    ]
  },
  {
    "id": "pf-thoracic-roller",
    "title": "Thoracic Extension Over Foam Roller",
    "subtitle": "Upper and mid-back mobility",
    "image": "assets/workouts/thoracic-foam-roller.png",
    "dose": "2 x 6-8",
    "sections": [
      [
        "Setup",
        [
          "Place the roller across your upper/mid back, feet planted; support your head with your hands."
        ]
      ],
      [
        "Focus",
        [
          "Thoracic movement."
        ]
      ],
      [
        "Cues",
        [
          "Support the head; extend gently over the roller through the upper/mid back."
        ]
      ],
      [
        "Avoid",
        [
          "Placing the roller under the lower back or hinging there."
        ]
      ],
      [
        "Feel",
        [
          "Gentle opening through the upper and mid back."
        ]
      ]
    ]
  },
  {
    "id": "wall-slides",
    "title": "Serratus Wall Slide",
    "subtitle": "Slide and reach",
    "image": "assets/mobility/05-wall-slides-native.png",
    "dose": "2 x 10-12",
    "sections": [
      [
        "Setup",
        [
          "Forearms against the wall with light pressure; ribs stacked."
        ]
      ],
      [
        "Focus",
        [
          "Serratus and scapular upward rotation."
        ]
      ],
      [
        "Cues",
        [
          "Reach up the wall while keeping ribs over pelvis."
        ]
      ],
      [
        "Avoid",
        [
          "Rib flare, lumbar arching, or forcing a painful range."
        ]
      ],
      [
        "Feel",
        [
          "Side ribs and underarm muscles, with light upper-back activation."
        ]
      ]
    ]
  },
  {
    "id": "pf-neck-nod",
    "title": "Deep-Neck-Flexor Nod",
    "subtitle": "Small nod, relaxed neck",
    "image": "assets/workouts/deep-neck-flexor-nod.png",
    "dose": "2 x 8-10 with 5-sec holds",
    "sections": [
      [
        "Setup",
        [
          "Lie on your back with your head supported and relaxed."
        ]
      ],
      [
        "Focus",
        [
          "Deep neck control."
        ]
      ],
      [
        "Cues",
        [
          "Make a small, gentle \"yes\" nod; keep the back of the neck long."
        ]
      ],
      [
        "Avoid",
        [
          "Jamming chin to chest, lifting forcefully, or neck strain."
        ]
      ]
    ]
  }
];

const EXERCISE_IMAGES = {
  "pf-incline-press-mon": "assets/workouts/incline-dumbbell-press.png",
  "pc-chest-supported-rows": "assets/workouts/chest-supported-row.png",
  "pc-landmine-press": "assets/workouts/landmine-press.png",
  "pf-pushup-plus-mon": "assets/workouts/push-up-plus.png",
  "pf-prone-y-mon": "assets/workouts/prone-y-raise.png",
  "pc-suitcase-carry": "assets/workouts/suitcase-carry.png",
  "final-sprint-warmup-tue": "assets/workouts/sprint-warmup.png",
  "final-sprints-tue": "assets/workouts/sprints.png",
  "pf-sled-fri": "assets/workouts/sled-push.png",
  "final-farmer-tue": "assets/workouts/farmer-carry.png",
  "pf-pallof-fri": "assets/workouts/pallof-press.png",
  "pf-side-plank-tue": "assets/workouts/side-plank.png",
  "pf-trap-bar-fri": "assets/workouts/trap-bar-deadlift.png",
  "pc-rdl": "assets/workouts/romanian-deadlift.png",
  "pc-bulgarian-split-squats": "assets/workouts/bulgarian-split-squat.png",
  "pc-barbell-hip-thrust": "assets/workouts/barbell-hip-thrust.png",
  "pc-hamstring-curls": "assets/workouts/hamstring-curl.png",
  "pf-copenhagen-fri": "assets/workouts/copenhagen-plank.png",
  "final-sled-optional-thu": "assets/workouts/sled-push.png",
  "pf-incline-press-thu": "assets/workouts/incline-dumbbell-press.png",
  "pf-cable-row-thu": "assets/workouts/cable-row-reach.png",
  "pf-landmine-thu": "assets/workouts/landmine-press.png",
  "pf-external-rotation-thu": "assets/workouts/band-external-rotation.png",
  "final-chest-choice-fri": [
    "assets/workouts/cable-fly.png",
    "assets/workouts/ring-pushup.png"
  ],
  "pf-prone-y-thu": "assets/workouts/prone-y-raise.png",
  "pf-front-rack-thu": "assets/workouts/front-rack-carry.png",
  "pf-front-squat-tue": "assets/workouts/front-squat.png",
  "pf-single-rdl-fri": "assets/workouts/single-leg-rdl.png",
  "pc-circuit-reverse-lunges": "assets/workouts/reverse-lunge.png",
  "pf-bear-sat": "assets/workouts/bear-crawl.png",
  "pf-sled-combo-sat": [
    "assets/workouts/sled-push.png",
    "assets/workouts/backward-sled-drag.png"
  ],
  "pf-farmer-sat": "assets/workouts/farmer-carry.png",
  "pc-zone-2": "assets/workouts/zone-2-cardio.png"
};

const PROGRAM = {
  Monday: {
    title: "Upper - Chest + Scapular Control",
    exercises: [
      exercise("pf-incline-press-mon", "Incline DB Press", "4", "6-8", "Workout", [["Focus",["Chest strength with a comfortable lumbar curve."]],["Cues",["Use a modest incline, roughly 20-30 degrees; keep ribs controlled and feet steady."]],["Avoid",["Exaggerated bench arch or rib flare."]],["Suggested rest",["2-3 min"]]]),
      exercise("pc-chest-supported-rows", "Chest-Supported Row", "3", "8-10", "Workout", [["Focus",["Controlled scapular movement."]],["Cues",["Let shoulder blades reach forward at the bottom, then row smoothly."]],["Avoid",["Permanently pinning blades back, jerking, or adding extra back volume."]],["Suggested rest",["90-120 sec"]]]),
      exercise("pc-landmine-press", "Half-Kneeling Landmine Press", "3", "8/side", "Workout", [["Focus",["Serratus, upward rotation, trunk control."]],["Cues",["Press up and forward; let the shoulder blade rotate while ribs stay over pelvis."]],["Avoid",["Leaning back or twisting to finish."]],["Suggested rest",["60-90 sec between sides/sets"]]]),
      exercise("pf-pushup-plus-mon", "Push-Up Plus", "3", "10-15", "Workout", [["Focus",["Serratus strength; blades wrap around ribs."]],["Cues",["Perform a push-up, then push the floor farther away at the top."]],["Avoid",["Sagging hips or substituting spinal rounding for the plus."]],["Suggested rest",["60-90 sec"]]]),
      exercise("pf-prone-y-mon", "Prone Y Raise", "3", "10-15", "Workout", [["Focus",["Lower-trap control."]],["Cues",["Reach arms into a Y with very light weight and a long neck."]],["Avoid",["Shrugging, swinging, or lifting through the lower back."]],["Suggested rest",["60 sec"]]]),
      exercise("pc-suitcase-carry", "Suitcase Carry", "3", "30-40 m/side", "Workout", [["Focus",["Resistance to side bending."]],["Cues",["Carry one weight; walk tall with level shoulders and pelvis."]],["Avoid",["Leaning toward or away from the weight."]],["Suggested rest",["60-90 sec"]]])
    ]
  },
  Tuesday: {
    title: "Athletic Conditioning + Trunk",
    exercises: [
      { ...exercise("final-sprint-warmup-tue", "Sprint Warmup", "1", "5 min easy movement; A-skips; high knees; leg swings; 2-3 progressive accelerations", "Workout", [["Preparation",["5 min easy movement","A-skips","High knees","Leg swings","2-3 progressive accelerations"]],["Focus",["Preparation for fast, coordinated movement."]],["Cues",["Build speed gradually before working sprints."]],["Avoid",["Starting fast sprints cold."]]]), dose: "5 min easy movement; A-skips; high knees; leg swings; 2-3 progressive accelerations", setLabel: "Warmup" },
      { ...exercise("final-sprints-tue", "Sprints", "6", "10-15 sec", "Workout", [["Focus",["Speed and movement quality."]],["Cues",["Run fast with smooth mechanics; recover fully between efforts."]],["Avoid",["Turning the session into exhausted, deteriorating efforts."]],["Rest",["2-3 min between efforts. Recover fully; stop sprint work if mechanics deteriorate or pain develops."]]]), dose: "6 x 10-15 sec; 2-3 min rest between efforts", setLabel: "Sprint" },
      exercise("pf-sled-fri", "Sled Push", "5", "20 m", "Workout", [["Focus",["Athletic leg drive."]],["Cues",["Use a moderately heavy load; drive through the legs with a steady trunk."]],["Avoid",["Lumbar collapse or load that prevents controlled steps."]],["Suggested rest",["60-90 sec, or until quality returns"]]]),
      exercise("final-farmer-tue", "Farmer Carry", "4", "30-40 m", "Workout", [["Focus",["Whole-body trunk stability."]],["Cues",["Carry two weights; keep head, ribs, and pelvis comfortably aligned."]],["Avoid",["Swaying, leaning back, or craning the neck."]]]),
      exercise("pf-pallof-fri", "Pallof Press", "3", "10/side", "Workout", [["Focus",["Anti-rotation trunk strength."]],["Cues",["Press straight out while resisting the cable/band's rotation."]],["Avoid",["Twisting or letting ribs flare."]],["Suggested rest",["45-60 sec"]]]),
      exercise("pf-side-plank-tue", "Side Plank", "3", "30-45 sec/side", "Workout", [["Focus",["Lateral trunk/pelvic endurance."]],["Cues",["Stack shoulders and hips; hold the pelvis steady."]],["Avoid",["Hip sag, rolling, or shoulder pain."]],["Suggested rest",["45-60 sec"]]])
    ]
  },
  Thursday: {
    title: "Leg Day - Pelvis + Posterior Chain",
    exercises: [
      exercise("pf-trap-bar-fri", "Trap-Bar Deadlift", "4", "4-6", "Workout", [["Focus",["Leg/hip strength and trunk control."]],["Cues",["Brace comfortably, push through the floor, and finish tall."]],["Avoid",["Leaning back or hyperextending at lockout."]],["Suggested rest",["2-3 min"]]]),
      exercise("pc-rdl", "Romanian Deadlift", "4", "6-8", "Workout", [["Focus",["Hamstrings and glutes."]],["Cues",["Move hips backward; keep the load close and spine steady."]],["Avoid",["Chasing depth with lumbar movement or low-back compression."]],["Suggested rest",["2-3 min"]]]),
      exercise("pc-bulgarian-split-squats", "Bulgarian Split Squat", "3", "8/side", "Workout", [["Focus",["Unilateral leg strength and pelvic control."]],["Cues",["Lower with control; keep the front foot planted and pelvis steady."]],["Avoid",["Arching backward at the top or losing balance under load."]],["Suggested rest",["90 sec"]]]),
      exercise("pc-barbell-hip-thrust", "Hip Thrust", "3", "8-10", "Workout", [["Focus",["Glute strength."]],["Cues",["Extend the hips and stop when they are straight."]],["Avoid",["Adding range by arching the lower back."]],["Suggested rest",["90-120 sec"]]]),
      exercise("pc-hamstring-curls", "Hamstring Curl", "3", "10-15", "Workout", [["Focus",["Direct hamstring strength."]],["Cues",["Curl smoothly and lower under control."]],["Avoid",["Jerking or lifting the hips to move the load."]],["Suggested rest",["60-90 sec"]]]),
      exercise("pf-copenhagen-fri", "Copenhagen Plank", "3", "20-30 sec/side", "Workout", [["Focus",["Adductors and lateral trunk/pelvic stability."]],["Cues",["Use a controllable support position; keep hips lifted and body aligned."]],["Avoid",["Hip sag or sharp groin/shoulder pain."]],["Suggested rest",["45-60 sec"]]]),
      { ...exercise("final-sled-optional-thu", "Sled Push - Optional", "3-4", "20 m", "Workout", [["Focus",["Optional conditioning."]],["Cues",["Add only when feeling fresh; maintain steady leg drive."]],["Avoid",["Forcing extra work when tired or treating this as mandatory."]]]), optional: true }
    ]
  },
  Friday: {
    title: "Upper - Rounded Shoulders + Balanced Physique",
    exercises: [
      exercise("pf-incline-press-thu", "Low-Incline DB Press", "4", "8-10", "Workout", [["Focus",["Second weekly chest-strength exposure."]],["Cues",["Use a low incline; press with ribs controlled and a comfortable lumbar curve."]],["Avoid",["Exaggerated arch or painful shoulder range."]],["Suggested rest",["90-120 sec"]]]),
      exercise("pf-cable-row-thu", "One-Arm Cable Row with Reach", "3", "10/side", "Workout", [["Focus",["Scapular control."]],["Cues",["Allow a controlled reach, then row as the blade moves around the ribs."]],["Avoid",["Pinning the blade back throughout or twisting to pull."]],["Suggested rest",["60-90 sec"]]]),
      exercise("pf-landmine-thu", "Half-Kneeling Landmine Press", "3", "10/side", "Workout", [["Focus",["Upward rotation and trunk control."]],["Cues",["Reach up and forward while keeping pelvis and ribs steady."]],["Avoid",["Lumbar compensation or rotation."]],["Suggested rest",["60-90 sec"]]]),
      exercise("pf-external-rotation-thu", "Cable/Band External Rotation", "3", "12-15", "Workout", [["Focus",["Rotator-cuff strength."]],["Cues",["Keep elbows relatively close to the body; rotate slowly with light resistance."]],["Avoid",["Swinging, shrugging, or painful range."]],["Suggested rest",["45-60 sec"]]]),
      { ...exercise("final-chest-choice-fri", "Cable Fly OR Ring Push-Up", "3", "10-15", "Workout", [["Choose one",["Cable Fly OR Ring Push-Up. Complete 3 sets of the shoulder-comfortable option, not both."]],["Focus",["Chest development; choose the shoulder-comfortable option."]],["Cues",["Fly: bring arms together through a comfortable arc. Rings: control the descent and press with a steady trunk."]],["Avoid",["Excessive stretch, unstable depth, or doing both as required work."]]]), imageLabels: ["Cable Fly","Ring Push-Up"] },
      exercise("pf-prone-y-thu", "Prone Y Raise", "2", "12-15", "Workout", [["Focus",["Second weekly lower-trap exposure."]],["Cues",["Use very light weight; reach long into a Y."]],["Avoid",["Shrugging or lumbar extension."]],["Suggested rest",["45-60 sec"]]]),
      exercise("pf-front-rack-thu", "Front-Rack Carry", "3", "20-30 m", "Workout", [["Focus",["Loaded trunk and posture control."]],["Cues",["Hold two dumbbells/kettlebells in the front rack and walk tall."]],["Avoid",["Leaning backward or flaring the ribs."]],["Suggested rest",["60-90 sec"]]])
    ]
  },
  Saturday: {
    title: "Integrated Athlete - Pelvic/Trunk Stability",
    exercises: [
      exercise("pf-front-squat-tue", "Front Squat", "3", "6-8", "Workout", [["Focus",["Squat strength with trunk control."]],["Cues",["Keep ribs over pelvis, elbows comfortably up, and feet stable."]],["Avoid",["Forcing \"chest up\" through lumbar arching or grinding maximal reps."]],["Suggested rest",["2-3 min"]]]),
      exercise("pf-single-rdl-fri", "Single-Leg RDL", "3", "8/leg", "Workout", [["Focus",["Hamstrings, glutes, balance, pelvic control."]],["Cues",["Hinge through the standing hip; reach the other leg back with pelvis controlled."]],["Avoid",["Rotating the pelvis open or reaching by rounding the back."]],["Suggested rest",["60-90 sec"]]]),
      exercise("pc-circuit-reverse-lunges", "Reverse Lunge", "3", "8/leg", "Workout", [["Focus",["Unilateral strength and coordination."]],["Cues",["Step back smoothly; keep the front foot stable and return under control."]],["Avoid",["Overstriding or arching backward on the ascent."]],["Suggested rest",["75-90 sec"]]]),
      exercise("pf-bear-sat", "Bear Crawl", "4", "15-20 m", "Workout", [["Focus",["Serratus, trunk stability, contralateral coordination."]],["Cues",["Hover knees; take short opposite-hand/foot steps."]],["Avoid",["Hip sway, sagging, or rushing."]],["Suggested rest",["45-60 sec"]]]),
      { ...exercise("pf-sled-combo-sat", "Sled Push + Backward Drag", "4", "20 m push + 20 m backward drag per round", "Workout", [["Focus",["Integrated leg conditioning."]],["Cues",["Push with steady leg drive; drag backward with controlled steps on a clear path."]],["Avoid",["Treating 20 m as the combined distance or losing trunk control."]],["Suggested rest",["60-90 sec between rounds"]]]), setLabel: "Round", imageLabels: ["Sled Push","Backward Drag"] },
      exercise("pf-farmer-sat", "Farmer Carry", "3", "30-40 m", "Workout", [["Focus",["Loaded whole-body stability."]],["Cues",["Carry two weights and walk with a steady, tall trunk."]],["Avoid",["Leaning, excessive sway, or neck extension."]],["Suggested rest",["60-90 sec"]]]),
      { ...exercise("pc-zone-2", "Zone 2", "1", "20-30 min", "Workout", [["Focus",["Aerobic conditioning."]],["Cues",["Use bike, incline treadmill, or easy jog at an easy conversational effort."]],["Avoid",["Turning the finish into another hard interval session."]]]), dose: "20-30 min", setLabel: "Session" }
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
  expanded: {},
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
  renderDayChoices();
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
      renderWorkoutScreen();
    });
  });
}

function renderDayChoices() {
  const program = PROGRAM[state.day];
  const log = getWorkoutLog();
  const expanded = state.expanded[state.day] || {};
  const progress = getSectionProgress(program.exercises, log);
  const mobilityDone = MOBILITY_ROUTINE.filter((item) => log.mobility[item.id]).length;

  els.workoutScreen.innerHTML = `
    ${subnav(state.day)}
    <div class="daily-sections">
      <details class="day-section" data-section="mobility" ${expanded.mobility ? "open" : ""}>
        <summary>
          <span class="section-number">01</span>
          <span class="section-copy">
            <strong>Daily Mobility</strong>
            <small>6 moves · 2 sets each</small>
            <span class="section-progress" data-mobility-progress>${mobilityDone} of 6 complete</span>
          </span>
          <span class="section-chevron" aria-hidden="true">›</span>
        </summary>
        <div class="mobility-list section-body">
          ${MOBILITY_ROUTINE.map((item, index) => renderMobilityCard(item, index, log)).join("")}
        </div>
      </details>
      <details class="day-section" data-section="workout" ${expanded.workout ? "open" : ""}>
        <summary>
          <span class="section-number">02</span>
          <span class="section-copy">
            <strong>Workout</strong>
            <span class="day-workout-title">${program.title}</span>
            <ul>
              ${program.exercises.map((item) => `<li>${item.title} <em>${getPrescription(item)}</em></li>`).join("")}
            </ul>
            <span class="section-progress" data-workout-progress>${progress.completed} of ${progress.total} required checks complete</span>
          </span>
          <span class="section-chevron" aria-hidden="true">›</span>
        </summary>
        <div class="section-body">
          <p class="posture-cue">Ribs over pelvis, neck tall, shoulders relaxed.</p>
          <div class="workout-section-detail">
            ${program.exercises.map((item, index) => renderWorkoutDetail(item, index + 1, log)).join("")}
          </div>
          <div class="program-guidance mobility-notes">
            <section>
              <strong>Progress with control</strong>
              <ul>
                <li>Main lifts: reach the top of the rep range on every set with clean form and 1-2 reps in reserve before adding weight.</li>
                <li>Add about 5 lb total for upper body or 5-10 lb for lower body; smaller increases are fine. For dumbbells, total means both weights combined.</li>
                <li>Keep all mobility drills at two sets. Progress control and comfortable range before load; neck nods keep five-second holds.</li>
                <li>After 2 x 12/side dead bugs are easy and controlled: normal, longer-leg, band-resisted, pullover, then cable-resisted. Advance only while ribs and pelvis stay steady.</li>
                <li>Keep carry distances and hold times as written. Progress load or difficulty, not unlimited distance or time. Y raises and external rotations stay light.</li>
              </ul>
            </section>
            <section>
              <strong>12-week focus</strong>
              <ul>
                <li>Weeks 1-4: technique and control, main lifts around RPE 6-7.</li>
                <li>Weeks 5-8: add weight gradually while keeping the same movement quality.</li>
                <li>Weeks 9-12: integrate strength, main lifts around RPE 7-8.</li>
                <li>RPE is perceived effort out of 10; quality takes priority over load.</li>
              </ul>
            </section>
            <section>
              <strong>Recovery and safety</strong>
              <ul>
                <li>Thursday is the main leg day with substantial hinge work. Keep Saturday controlled, not maximal. Use lighter loads or skip optional sled work when recovery is poor.</li>
                <li>Sprints: six efforts with 2-3 min rest. Warm up first; stop if mechanics deteriorate or pain develops.</li>
                <li>Keep a comfortable natural lumbar curve and let shoulder blades move. Use secure equipment, manageable loads and a clear path.</li>
                <li>Stop for sharp, increasing or radiating pain. Persistent or worsening symptoms need a clinician's assessment.</li>
                <li>New bowel/bladder changes, saddle-area numbness or substantial/progressive leg weakness need urgent medical assessment.</li>
              </ul>
            </section>
            <p class="training-note">This is a training plan, not a diagnosis or a guarantee of posture correction. Preparation and ramp-up sets are separate from working sets; never push through symptoms to finish a checklist.</p>
          </div>
        </div>
      </details>
    </div>
  `;

  bindBack();
  const day = state.day;
  els.workoutScreen.querySelectorAll("details[data-section]").forEach((section) => {
    section.addEventListener("toggle", () => {
      if (!state.expanded[day]) state.expanded[day] = {};
      state.expanded[day][section.dataset.section] = section.open;
    });
  });
  els.workoutScreen.querySelectorAll("[data-mobility]").forEach((input) => {
    input.addEventListener("change", () => {
      log.mobility[input.dataset.mobility] = input.checked;
      persistWorkoutLog(log);
      const completed = MOBILITY_ROUTINE.filter((item) => log.mobility[item.id]).length;
      els.workoutScreen.querySelector("[data-mobility-progress]").textContent = `${completed} of 6 complete`;
    });
  });
  els.workoutScreen.querySelectorAll("[data-set-check]").forEach((input) => {
    input.addEventListener("change", () => updateSetCheck(input));
  });
}

function renderMobilityCard(item, index, log) {
  return `
    <article class="mobility-card">
      <div class="mobility-header">
        <p>${index + 1}. ${item.title}</p>
        <span>(${item.subtitle})</span>
      </div>
      <img class="mobility-image" src="${item.image}" alt="${item.title} reference" loading="lazy" decoding="async" width="1672" height="941">
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


function renderWorkoutDetail(item, exerciseNumber, log) {
  const sources = EXERCISE_IMAGES[item.id];
  const images = Array.isArray(sources) ? sources : sources ? [sources] : [];
  return `
    <article class="mobility-card workout-card">
      <div class="mobility-header workout-header">
        <p>${exerciseNumber}. ${item.title}</p>
        <span>${item.optional ? "Optional work" : item.setLabel === "Warmup" ? "Preparation" : item.setLabel === "Session" ? "Duration" : item.setLabel === "Round" ? "Rounds" : "Prescribed sets"}</span>
      </div>
      ${images.map((src, index) => `${item.imageLabels ? `<p class="training-note">${item.imageLabels[index]}</p>` : ""}<img class="mobility-image" src="${src}" alt="${item.imageLabels?.[index] || item.title} form reference" loading="lazy" decoding="async" width="1672" height="941">`).join("")}
      <div class="workout-content">
        <span class="pill">${getPrescription(item)}</span>
        ${renderSetChecks(item, log)}
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

function getPrescription(item) {
  return item.dose || `${item.sets} ${item.setLabel === "Round" ? "rounds:" : "x"} ${item.reps}`;
}

function renderSetChecks(item, log) {
  const setCount = getPrescribedSetCount(item);
  const requiredCount = getRequiredSetCount(item);
  const setLabel = item.setLabel || "Set";
  const savedSets = Array.isArray(log.exercises[item.id]) ? log.exercises[item.id] : [];

  return `
    <fieldset class="set-checks">
      <legend>${item.optional ? "Optional sets" : setLabel === "Warmup" ? "Warmup complete" : setLabel === "Session" ? "Session complete" : setLabel === "Sprint" ? "Complete each sprint" : setLabel === "Round" ? "Complete each round" : "Complete each set"}</legend>
      <div class="set-check-list">
        ${Array.from({ length: setCount }, (_, setIndex) => `
          <label class="set-check">
            <input class="check" type="checkbox" aria-label="${item.title}, ${setLabel.toLowerCase()} ${setIndex + 1}${setIndex >= requiredCount ? ', optional' : ''}" data-set-check data-exercise="${item.id}" data-set="${setIndex}" ${savedSets[setIndex]?.done ? "checked" : ""}>
            <span>${setLabel} ${setIndex + 1}${setIndex >= requiredCount ? " (optional)" : ""}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}

function getPrescribedSetCount(item) {
  return Math.max(1, ...(String(item.sets).match(/\d+/g) || ["1"]).map(Number));
}

function getRequiredSetCount(item) {
  if (item.optional) return 0;
  return Math.max(1, Number.parseInt(item.sets, 10) || 1);
}

function getSectionProgress(exercises, log) {
  return exercises.reduce((progress, item) => {
    const setCount = getRequiredSetCount(item);
    const savedSets = Array.isArray(log.exercises[item.id]) ? log.exercises[item.id] : [];
    progress.total += setCount;
    progress.completed += savedSets.slice(0, setCount).filter((set) => set?.done).length;
    return progress;
  }, { completed: 0, total: 0 });
}

function updateSetCheck(input) {
  const log = getWorkoutLog();
  const exerciseId = input.dataset.exercise;
  const setIndex = Number(input.dataset.set);

  if (!Array.isArray(log.exercises[exerciseId])) log.exercises[exerciseId] = [];
  if (!log.exercises[exerciseId][setIndex]) log.exercises[exerciseId][setIndex] = {};
  log.exercises[exerciseId][setIndex].done = input.checked;
  persistWorkoutLog(log);
  const progress = getSectionProgress(PROGRAM[state.day].exercises, log);
  els.workoutScreen.querySelector("[data-workout-progress]").textContent = `${progress.completed} of ${progress.total} required checks complete`;
}

function subnav(title) {
  return `
    <div class="subnav">
      <button class="back-button" type="button" data-back>Back</button>
      ${state.day && title !== state.day ? `<p class="day-context">${state.day}</p>` : ""}
      <h2>${title}</h2>
    </div>
  `;
}

function bindBack() {
  const back = els.workoutScreen.querySelector("[data-back]");
  if (!back) return;

  back.addEventListener("click", () => {
    state.day = "";
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
