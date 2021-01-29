const formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const formReference = event.target;
  const formData = new FormData(formReference);
  const submittedData = {};
  formData.forEach((value, key) => {
    console.log('value: ', value);
    console.log('key: ', key);
    submittedData[key] = value;
  });
  console.log(submittedData); // готовый объект для отправки на бэкенд
});

