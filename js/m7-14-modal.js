// чтобы показать модалку достаточно по клику кнопки добавить класс show-modal в тег body
const openModalBtn = document.querySelector('button[data-action="open-modal"]');
openModalBtn.addEventListener('click', openModalHandler);

const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]',
);
closeModalBtn.addEventListener('click', closeModalHandler);

// модалку надо закрывать не только кнопкой, но и кликом за пределами модалки
// для этого вешаем слушатель на backdrop (не на window)
const backdropRef = document.querySelector('.js-backdrop');
backdropRef.addEventListener('click', closeModalByBackdropHandler);

function openModalHandler() {
  // закрытие по нажатию escape
  window.addEventListener('keydown', pressEscapeHandler);
  document.body.classList.add('show-modal');
}
function closeModalHandler() {
  window.removeEventListener('keydown', pressEscapeHandler);
  document.body.classList.remove('show-modal');
}
function closeModalByBackdropHandler(event) {
  if (event.target === event.currentTarget) {
    closeModalHandler();
  }
}

function pressEscapeHandler(event) {
  if (event.code === 'Escape') {
    closeModalHandler();
    console.log('stalker');
  }
}
