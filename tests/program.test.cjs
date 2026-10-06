const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const context = vm.createContext({});
const helper = source.slice(source.indexOf('function exercise('), source.indexOf('function drawChart('));
const checks = source.slice(source.indexOf('function getPrescription('), source.indexOf('function updateSetCheck('));
vm.runInContext(source.slice(0, source.indexOf('const DAYS')) + helper + checks, context);
const model = JSON.parse(vm.runInContext('JSON.stringify({PROGRAM, MOBILITY_ROUTINE, EXERCISE_IMAGES})', context));

// These are the final handoff's working prescriptions, independent of app data.
const expected = {
  Monday: [['Incline DB Press','4','6-8'],['Chest-Supported Row','3','8-10'],['Half-Kneeling Landmine Press','3','8/side'],['Push-Up Plus','3','10-15'],['Prone Y Raise','3','10-15'],['Suitcase Carry','3','30-40 m/side']],
  Tuesday: [['Sprint Warmup','1','5 min easy movement; A-skips; high knees; leg swings; 2-3 progressive accelerations'],['Sprints','6','10-15 sec'],['Sled Push','5','20 m'],['Farmer Carry','4','30-40 m'],['Pallof Press','3','10/side'],['Side Plank','3','30-45 sec/side']],
  Thursday: [['Trap-Bar Deadlift','4','4-6'],['Romanian Deadlift','4','6-8'],['Bulgarian Split Squat','3','8/side'],['Hip Thrust','3','8-10'],['Hamstring Curl','3','10-15'],['Copenhagen Plank','3','20-30 sec/side'],['Sled Push - Optional','3-4','20 m']],
  Friday: [['Low-Incline DB Press','4','8-10'],['One-Arm Cable Row with Reach','3','10/side'],['Half-Kneeling Landmine Press','3','10/side'],['Cable/Band External Rotation','3','12-15'],['Cable Fly OR Ring Push-Up','3','10-15'],['Prone Y Raise','2','12-15'],['Front-Rack Carry','3','20-30 m']],
  Saturday: [['Front Squat','3','6-8'],['Single-Leg RDL','3','8/leg'],['Reverse Lunge','3','8/leg'],['Bear Crawl','4','15-20 m'],['Sled Push + Backward Drag','4','20 m push + 20 m backward drag per round'],['Farmer Carry','3','30-40 m'],['Zone 2','1','20-30 min']]
};

test('all five days match final exercise order and doses', () => {
  assert.deepEqual(Object.keys(model.PROGRAM), Object.keys(expected));
  const ids = [];
  for (const [day, rows] of Object.entries(expected)) {
    const exercises = model.PROGRAM[day].exercises;
    assert.deepEqual(exercises.map(e => [e.title,e.sets,e.reps]), rows);
    for (const item of exercises) {
      ids.push(item.id);
      for (const heading of ['Focus','Cues','Avoid']) assert(item.sections.some(s => s[0] === heading));
      assert(!model.MOBILITY_ROUTINE.some(m => m.title === item.title));
    }
  }
  assert.equal(new Set(ids).size, ids.length);
});

test('six daily drills each prescribe two sets with exact units', () => {
  assert.deepEqual(model.MOBILITY_ROUTINE.map(m => m.dose), ['2 x 5 breaths','2 x 8-12/side','2 x 8-10/side','2 x 6-8','2 x 10-12','2 x 8-10 with 5-sec holds']);
});

test('every current image exists and is precached', () => {
  const shellSource = fs.readFileSync(path.join(root,'service-worker.js'),'utf8').split('self.addEventListener')[0];
  const shell = new Set(JSON.parse(vm.runInNewContext(shellSource + ';JSON.stringify(APP_SHELL)')));
  for (const day of Object.values(model.PROGRAM)) for (const item of day.exercises) assert(model.EXERCISE_IMAGES[item.id]);
  const files = [...model.MOBILITY_ROUTINE.map(m=>m.image), ...Object.values(model.EXERCISE_IMAGES).flat()];
  for (const file of files) {
    assert(fs.existsSync(path.join(root,file)), file);
    assert(shell.has('./'+file), file);
  }
});

test('optional sled does not inflate required completion and alternatives share sets', () => {
  assert.equal(vm.runInContext('getRequiredSetCount(PROGRAM.Thursday.exercises[6])',context), 0);
  assert.equal(vm.runInContext('getPrescribedSetCount(PROGRAM.Thursday.exercises[6])',context), 4);
  assert.equal(vm.runInContext('getSectionProgress(PROGRAM.Thursday.exercises,{exercises:{}}).total',context), 20);
  const choice = model.PROGRAM.Friday.exercises[4];
  assert.equal(choice.sets,'3');
  assert.deepEqual(choice.imageLabels,['Cable Fly','Ring Push-Up']);
  assert.equal(model.EXERCISE_IMAGES[choice.id].length,2);
});

test('warmup, sprint rest and rounds have accurate display text', () => {
  assert.equal(vm.runInContext('getPrescription(PROGRAM.Tuesday.exercises[0])',context),expected.Tuesday[0][2]);
  assert.equal(vm.runInContext('getPrescription(PROGRAM.Tuesday.exercises[1])',context),'6 x 10-15 sec; 2-3 min rest between efforts');
  assert.equal(vm.runInContext('getPrescription(PROGRAM.Saturday.exercises[4])',context),'4 rounds: 20 m push + 20 m backward drag per round');
  assert.equal(vm.runInContext('getPrescription(PROGRAM.Saturday.exercises[6])',context),'20-30 min');
  assert(source.includes('training-log.workouts.v11'));
  assert(source.includes('training-log.weights.v11'));
});
