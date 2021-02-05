// mouseenter mouseleave
const boxRef = document.querySelector('.js-box');
boxRef.addEventListener('mouseenter', event => {
  event.target.classList.add('box--active');
  console.log(event);
});
boxRef.addEventListener('mouseleave', event => {
  event.target.classList.remove('box--active');
  console.log(event);
});

// mouseover mouseout 
const box2Ref = document.querySelector('.box2.js-box');
box2Ref.addEventListener('mouseover', event => {
  event.target.classList.add('box--active');
  console.log(event);
});
box2Ref.addEventListener('mouseout', event => {
  event.target.classList.remove('box--active');
  console.log(event);
});