// // change event - изменяется после потери фокуса
// // input event - изменяется при каждом изменении значения

// const inputRef = document.querySelector('.js-input');
// const nameLabelRef = document.querySelector('.js-button > span');

// inputRef.addEventListener('input', event => {
//   nameLabelRef.textContent = event.target.value;
// });

// const licenseRef = document.querySelector('.js-license');
// const btnRef = document.querySelector('.js-button');
// licenseRef.addEventListener('change', event => {
//   btnRef.disabled = !event.target.checked;
// });

// // focus event - получение фокуса
// // blur event - потеря фокуса

// const focusRef = document.querySelector('.js-focus-blur');
// focusRef.addEventListener('focus', event => {
//   console.log('Получил фокус');
// });
// focusRef.addEventListener('blur', event => {
//   console.log('фокус потерян...');
// });

///////////////////////////////////////////////////////////////
// рефакторинг

const inputRef = document.querySelector('.js-input');
const nameLabelRef = document.querySelector('.js-button > span');
const licenseRef = document.querySelector('.js-license');
const btnRef = document.querySelector('.js-button');
const focusRef = document.querySelector('.js-focus-blur');

focusRef.addEventListener('focus', handleInputFocus);
focusRef.addEventListener('blur', handleInputBlur);
inputRef.addEventListener('input', handleInputChange);
licenseRef.addEventListener('change', handleLicenseChange);

function handleInputFocus(event) {
  console.log('Получил фокус');
}
function handleInputBlur(event) {
  console.log('фокус потерян...');
}
function handleInputChange(event) {
  nameLabelRef.textContent = event.target.value;
}
function handleLicenseChange(event) {
  btnRef.disabled = !event.target.checked;
}

