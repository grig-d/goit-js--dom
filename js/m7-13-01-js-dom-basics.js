console.log('window:', window);
const fnNoStrict = function () {
  console.log('this no strict:', this);
};
fnNoStrict();
const fnStrict = function () {
  'use strict';
  console.log('this strict:', this);
};
fnStrict();

console.log(window.document); // window писать не обязательно, т.е. console.log(window.document) === console.log(document);
console.dir(window.document); // window писать не обязательно, т.е. console.dir(window.document) === console.dir(document);

// поиск DOM узла
const titleRef = document.querySelector('h1'); // найдет первый попавшийся тег h1
console.log(titleRef);
console.dir(titleRef);

const title2Ref = document.querySelector('.css-selector'); // найдет первый попавшийся тег с классом css-selector
console.log(title2Ref);
console.dir(title2Ref);

const title2aRef = document.querySelectorAll('.css-selector'); // найдет все подходящие теги с классом css-selector
console.log(title2aRef); // NodeList(3) [h2.css-selector, h2.css-selector, h2.css-selector]
console.dir(title2aRef);

titleRef.textContent = 'I am a JavaScripteaser'; // после изменения содержания страница перезагрузится

// classList
const activeLinkRef = document.querySelector('.active-link');
console.log(activeLinkRef);
console.dir(activeLinkRef);
console.log(activeLinkRef.classList); // DOMTokenList(2) ["css-selector", "active-link", value: "css-selector active-link"]

// создание элемента в памяти браузера
const headingRef = document.createElement('h2'); // это ссылка на объект в памяти браузера, его ещё нет в DOM
console.log(headingRef); // <h2></h2>
headingRef.textContent = 'Динамически созданный заголовок'; // <h2>Динамически созданный заголовок</h2>
headingRef.classList.add('section-title'); // <h2 class="section-title">Динамически созданный заголовок</h2>
headingRef.id = 'gallery'; // <h2 class="section-title" id="gallery">Динамически созданный заголовок</h2>

////////////////////////////////////
// создаём разметку карточки товара
/*
<div>
  <h2>Сервоприводы</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur
    accusamus at dolorum autem qui hic sunt soluta dolore quibusdam.
  </p>
  <p>Цена: 2000 кредитов</p>
</div>;
*/
const product = {
  name: 'Сервоприводы',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque dignissimos commodi illum doloremque, eum ea facilis iure, dolor corrupti, officiis reprehenderit unde voluptatibus exercitationem sapiente? Placeat excepturi mollitia hic! ',
  price: 2000,
  available: true,
};

const containerCardRef = document.createElement('div'); // создан контейнер 
containerCardRef.classList.add('product-card');
console.log(containerCardRef);

const titleCardRef = document.createElement('h2'); // создан заголовок отдельно от контейнера
titleCardRef.textContent = product.name;
titleCardRef.classList.add('product-card__name');
console.log(titleCardRef);

const descrCardRef = document.createElement('p'); // создан абзац отдельно от контейнера
descrCardRef.textContent = product.description;
console.log(descrCardRef);

const priceCardRef = document.createElement('p'); // создан абзац отдельно от контейнера
priceCardRef.textContent = `Цена: ${product.price} кредитов`;
console.log(priceCardRef);

// создаем вложенность элементов
// containerCardRef.appendChild(titleCardRef);
// containerCardRef.appendChild(descrCardRef);
// containerCardRef.appendChild(priceCardRef);
// или 
containerCardRef.append(titleCardRef, descrCardRef, priceCardRef);

// добавляем в DOM
// находим существующий элемент на странице и к нему добавляем наш элемент
const cardRoot = document.querySelector('#root');
console.log(cardRoot);
cardRoot.append(containerCardRef); // контейнер на странице

console.log('////');
console.log('////');
console.log('////');
console.log('////');