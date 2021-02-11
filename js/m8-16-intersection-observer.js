const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`Box ${entry.target.textContent} пересекает Root`);
      observer.disconnect(); // перестать следить за объектом
    }
  });
};
// entries - массив пересечений

const options = {
  rootMargin: '100px',
};

const io = new IntersectionObserver(onEntry, options);

const boxRef = document.querySelector('.js-box');

io.observe(boxRef); // ссылка на объект за которым надо наблюдать
