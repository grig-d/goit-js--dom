// mousemove

const coordOutputRef = document.querySelector('.js-coords');
const coordOutputThrottledRef = document.querySelector('.js-coords-throttled');
let mouseMoveCallbackCounter = 0;
let mouseMoveCallbackCounterThrottled = 0;

window.addEventListener('mousemove', event => {
  mouseMoveCallbackCounter += 1;
  coordOutputRef.textContent = `Кол-во вызовов callback-функции: ${mouseMoveCallbackCounter},
    X: ${event.clientX},
    Y: ${event.clientY}`;
});

// mousemove throttled
const throttledCallback = _.throttle(event => {
  mouseMoveCallbackCounterThrottled += 1;
  coordOutputThrottledRef.textContent = `Кол-во вызовов callback-функции: ${mouseMoveCallbackCounterThrottled},
  X: ${event.clientX},
  Y: ${event.clientY}`;
}, 200);
window.addEventListener('mousemove', throttledCallback);

// input

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
const debouncedOutputRef = document.querySelector('.js-output-debounced');
let inputCallbackCounter = 0;
let debouncedInputCallbackCounter = 0;

inputRef.addEventListener('input', event => {
  inputCallbackCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов callback-функции: ${inputCallbackCounter},
    Значение: ${event.target.value}
    `;
});

// input debounced
const debouncedInputCallback = _.debounce(event => {
  debouncedInputCallbackCounter += 1;

  debouncedOutputRef.textContent = `
    Кол-во вызовов callback-функции: ${debouncedInputCallbackCounter},
    Значение: ${event.target.value}
    `;
}, 300);
inputRef.addEventListener('input', debouncedInputCallback);
