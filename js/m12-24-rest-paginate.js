const refs = {
  container: document.querySelector('.js-container'),
  inputNumber: document.querySelector('#number-input'),
  inputTheme: document.querySelector('#theme-input'),
  searchBtn: document.querySelector('#search'),
};

let path;
let index;
let theme;
let page;

refs.searchBtn.addEventListener('click', () => {
  page = Math.floor((refs.inputNumber.value - 1) / 20);
  index = refs.inputNumber.value - 1 - page * 20;
  // console.log(
  //   'page: ',
  //   page,
  //   'index: ',
  //   index,
  //   'number: ',
  //   refs.inputNumber.value,
  // );
  theme = refs.inputTheme.value;
  path =
    'https://pixabay.com/api/?key=21332395-4a2076910c778f7aa83614951&q=' +
    `${theme}` +
    '&image_type=photo' +
    '&page=' +
    `${page + 1}`;
  searchPhoto();
});

function renderImage(data) {
  const markup = `<img src="${data.hits[index].largeImageURL}" alt="${data.hits[index].tags}"/>`;
  refs.container.textContent = '';
  refs.container.insertAdjacentHTML('beforeend', markup);
}

function searchPhoto() {
  fetch(path)
    .then(response => response.json())
    .then(renderImage)
    .catch(error => console.log(error));
}
