const book = {
  name: 'Охота на фазана',
  author: 'Марта Кэтра',
  genre: 'детектив',
  pageCount: 724,
  publisher: 'ООО Астрель',
};

console.log(book);
console.log(typeof book);

const bookStringified = JSON.stringify(book);
console.log(bookStringified);
console.log(typeof bookStringified);

const bookParsed = JSON.parse(bookStringified);
console.log(bookParsed);
console.log(typeof bookParsed);

////

localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
console.log('value from localStorage: ', value);

const settings = {
  theme: 'dark',
  fontSize: 14,
};

localStorage.setItem('settings', JSON.stringify(settings));

localStorage.removeItem('key');
