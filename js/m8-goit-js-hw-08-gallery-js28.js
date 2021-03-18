import galleryItems from './gallery-items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('img.lightbox__image'),
  closeLightbox: document.querySelector('button[data-action="close-lightbox"]'),
  overlay: document.querySelector('div.lightbox__overlay'),
};

const galleryMarkup = galleryItems.map((object, index) => {
  const item = document.createElement('li');
  item.classList.add('gallery__item');
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.setAttribute('href', object.original);
  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.setAttribute('src', object.preview);
  image.setAttribute('data-source', object.original);
  image.setAttribute('data-index', index);
  image.setAttribute('alt', object.description);
  link.appendChild(image);
  item.appendChild(link);
  return item;
});

refs.galleryList.append(...galleryMarkup);

let urlValue;
let currentIndex;

refs.galleryList.addEventListener('click', event => {
  event.preventDefault();
  if (event.currentTarget !== event.target) {
    urlValue = event.target.dataset.source;
    refs.lightboxImage.src = urlValue;
    currentIndex = Number(event.target.dataset.index);
    refs.lightbox.classList.add('is-open');
    window.addEventListener('keydown', escCloseLightbox);
    window.addEventListener('keydown', arrowCarousel);
  }
});

function closeLightbox() {
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.src = '';
  window.removeEventListener('keydown', escCloseLightbox);
  window.removeEventListener('keydown', arrowCarousel);
}

function escCloseLightbox(event) {
  if (event.code === 'Escape') {
    closeLightbox();
  }
}

function arrowCarousel(event) {
  if (event.code === 'ArrowLeft') {
    if (currentIndex === 0) {
      closeLightbox();
      return;
    }
    currentIndex--;
    updateImage();
  }
  if (event.code === 'ArrowRight') {
    if (currentIndex === [...galleryItems].length - 1) {
      closeLightbox();
      return;
    }
    currentIndex++;
    updateImage();
  }
}

function updateImage() {
  refs.lightboxImage.src = document.querySelector(
    `img[data-index="${currentIndex}"]`,
  ).dataset.source;
}

refs.closeLightbox.addEventListener('click', closeLightbox);

refs.overlay.addEventListener('click', closeLightbox);

// Task ------------------------------------------------------------------------

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
/*
<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>;
*/

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// Открытие модального окна по клику на элементе галереи.

// Подмена значения атрибута src элемента img.lightbox__image.

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна,
// пока грузится изображение, мы не видели предыдущее.

// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img,
// и указываться в href ссылки(это необходимо для доступности).

// Закрытие модального окна по клику на div.lightbox__overlay

// Закрытие модального окна по нажатию клавиши ESC

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо"
