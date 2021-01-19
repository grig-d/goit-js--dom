import products from './products.js';
console.table(products);

const createProductCard = product => {
  const containerCardRef = document.createElement('div'); // создан контейнер
  containerCardRef.classList.add('product-card');

  const titleCardRef = document.createElement('h2'); // создан заголовок отдельно от контейнера
  titleCardRef.textContent = product.name;
  titleCardRef.classList.add(
    'product-card__name',
    // тернарник ставит класс 'product-card__name--available' или 'product-card__name--not-available'
    product.available
      ? 'product-card__name--available'
      : 'product-card__name--not-available',
  );

  const descrCardRef = document.createElement('p'); // создан абзац отдельно от контейнера
  descrCardRef.textContent = product.description;

  const priceCardRef = document.createElement('p'); // создан абзац отдельно от контейнера
  priceCardRef.textContent = `Цена: ${product.price} кредитов`;

  containerCardRef.append(titleCardRef, descrCardRef, priceCardRef);

  return containerCardRef;
  // возвращает ссылку на готовый контейнер
  // функция не вставляет контейнер в DOM
  // задача этой функции - создать объект продукта и вернуть для него разметку не вставляя в DOM
};

console.log('// вручную'); // вручную
console.log(createProductCard(products[0]));
console.log(createProductCard(products[1]));
console.log(createProductCard(products[2]));

console.log('// или проходим циклом forEach'); // или проходим циклом forEach
products.forEach(product => console.log(createProductCard(product)));

console.log('// Map - массив элементов'); // Map - массив элементов
const productCards = products.map(product => createProductCard(product));
console.log(productCards);

const productListRef = document.querySelector('.js-products');
console.log(productListRef);

productListRef.append(...productCards); // распыление и подключение в DOM
