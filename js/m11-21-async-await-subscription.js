// subscription modal window

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    clearInterval(intervalId);
    return;
  }
  console.log('Подпишись на рассылку!');
  promptCounter++;
}, PROMPT_DELAY);
