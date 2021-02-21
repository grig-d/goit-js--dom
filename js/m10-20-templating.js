// insertAdjacentHTML

const tech = ['HTML', 'CSS', 'JS', 'React'];

const galleryRef = document.querySelector('.js-gallery');

const markup = tech
  .map(element => `<li><a href="">${element}</a></li>`)
  .join('');
console.log(markup);

galleryRef.insertAdjacentHTML('beforeend', markup);

// oldSchool handlebarsjs

console.log(Handlebars); // Handlebars добавлено на window

// получаем внутреннее содержимое в виде <li>{{label}}</li>
const html = document.querySelector('#list-item').innerHTML.trim();

const template = Handlebars.compile(html); // создаётся функция

const markupHandlebars = template({ items: ['HTML', 'CSS', 'JS', 'React'] });

const galleryHandlebarsRef = document.querySelector('.js-gallery-handlebars');
galleryHandlebarsRef.insertAdjacentHTML('beforeend', markupHandlebars);
