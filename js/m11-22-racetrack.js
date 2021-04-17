const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const refs = {
  startBtn: document.querySelector('.js-race-btn'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-result-table > tbody'),
};

refs.startBtn.addEventListener('click', () => {
    refs.startBtn.disabled = true;
  // массив промисов .map(run) - сокращенная запись
  const promises = horses.map(run);

  refs.progressField.textContent = 'Заезд начался! Ставки не принимаются!';

  Promise.race(promises).then(({ horse, time }) => {
    refs.winnerField.textContent = `Победил ${horse}, финишировав за время ${time}`;
  });

  Promise.all(promises).then(() => {
      refs.progressField.textContent = 'Заезд окончен, принимаются ставки';
      refs.startBtn.disabled = false;
  });
    
});

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
