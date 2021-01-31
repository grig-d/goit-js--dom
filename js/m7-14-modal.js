const boxRef = document.querySelector('.js-box');
boxRef.addEventListener('mouseenter', event => {
  event.target.classList.add('box--active');
  console.log(event);
});
boxRef.addEventListener('mouseleave', event => {
  event.target.classList.remove('box--active');
  console.log(event);
});
