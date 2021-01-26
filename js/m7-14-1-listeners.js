const targetBtnRef = document.querySelector('.js-target-btn');
const addListenerBtnRef = document.querySelector('.js-add-listener');
const removeListenerBtnRef = document.querySelector('.js-remove-listener');

const doStuffOnClick = () => {
  console.log(Date.now());
};

addListenerBtnRef.addEventListener('click', () => {
  targetBtnRef.addEventListener('click', doStuffOnClick);
});
addListenerBtnRef.addEventListener('click', () => {console.log('Listener is ON')});

removeListenerBtnRef.addEventListener('click', () => {
  targetBtnRef.removeEventListener('click', doStuffOnClick);
});
removeListenerBtnRef.addEventListener('click', () => {console.log('Listener is OFF')});

