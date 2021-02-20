const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};

populateMessage();

refs.form.addEventListener('submit', formSubmitHandler);
refs.textarea.addEventListener('input', textareaInputHandler);
function formSubmitHandler(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-massage');
  event.currentTarget.reset();
}
function textareaInputHandler(event) {
  const message = event.currentTarget.value;
  localStorage.setItem('feedback-massage', message);
}

function populateMessage() {
  const savedMessage = localStorage.getItem('feedback-massage');
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
