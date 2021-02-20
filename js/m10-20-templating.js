const tech = ['HTML', 'CSS', 'JS', 'React'];

const galleryRef = document.querySelector('.js-gallery');

const markup = tech.map(element => `<li><a href="">${element}</a></li>`).join('');
console.log(markup);

galleryRef.insertAdjacentHTML('beforeend', markup);
