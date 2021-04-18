const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-race-btn'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-result-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
    raceCounter += 1;
    refs.startBtn.disabled = true;
    
  // массив промисов .map(run) - сокращенная запись
  const promises = horses.map(run);

  updateWinnerField('');
  updateProgressField('🎬 Заезд начался! Ставки не принимаются!');
  determineWinner(promises);
  waitForAll(promises);
}

// функция запускает одного коня
function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function determineWinner(horsesPromises) {
  Promise.race(horsesPromises).then(({ horse, time }) => {
    updateWinnerField(`🏆 Победил ${horse}, финишировав за время ${time}`);
    updateResultTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesPromises) {
  Promise.all(horsesPromises).then(() => {
    updateProgressField('🏁 Заезд окончен, принимаются ставки');
    refs.startBtn.disabled = false;
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}
