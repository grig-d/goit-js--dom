// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Подпишись на рассылку!');
//   promptCounter++;
// }, PROMPT_DELAY);

const modal = new BSN.Modal('#subscriptionModal');
const refs = {
  modal: document.querySelector('#subscriptionModal'),
  // closeSecondaryBtnRef: document.querySelector('.js-secondary-close'),
};

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

setTimeout(() => {
  modal.show();
}, PROMPT_DELAY);

// closeSecondaryBtnRef.addEventListener('click', modal.hide);

// кастомное событие custom event из библиотеки bootstrap.native
refs.modal.addEventListener('hide.bs.modal', () => {
  console.log('qwe');
});
