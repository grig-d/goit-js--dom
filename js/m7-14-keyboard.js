const outputRef = document.querySelector('.js-output');
const clearBtnRef = document.querySelector('.js-clear');

window.addEventListener('keypress', onKeypress);
clearBtnRef.addEventListener('click', onClearOutput);

function onKeypress(event) {
  outputRef.textContent += event.key;
}
function onClearOutput(event) {
  outputRef.textContent = '';
}
