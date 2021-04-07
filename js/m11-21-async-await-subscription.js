const modal = new BSN.Modal('#subscriptionModal');
const refs = {
  modal: document.querySelector('#subscriptionModal'),
  closeSecondaryBtnRef: document.querySelector('.js-secondary-close'),
  subscribeBtnRef: document.querySelector('.btn-primary'),
};

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

openModal();

refs.closeSecondaryBtnRef.addEventListener('click', () => {
  modal.hide();
});

// кастомное событие custom event из библиотеки bootstrap.native
refs.modal.addEventListener('hide.bs.modal', () => {
  openModal();
});

refs.subscribeBtnRef.addEventListener('click', () => {
  hasSubscribed = true;
  modal.hide();
});

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    return;
  }
  setTimeout(() => {
    modal.show();
    promptCounter += 1;
    console.log(promptCounter);
  }, PROMPT_DELAY);
}
