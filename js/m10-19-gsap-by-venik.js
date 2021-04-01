const burgerRef = document.querySelector('.burger');
const sideBarRef = document.querySelector('.side-bar');
const closeButtonRef = sideBarRef.querySelector('.x-mark');

const openSideBar = () => {
  // sideBarRef.classList.add('active');
  gsap.to(sideBarRef, {x: 0, duration: 0.4});
  window.addEventListener('keydown', closeOnEscape);
};

const closeSideBar = () => {
  // sideBarRef.classList.remove('active');
  gsap.to(sideBarRef, { x: '-100%', duration: 0.2 });
  window.removeEventListener('keydown', closeOnEscape);
};

const closeOnEscape = event => {
  console.log(event.key);
  if (event.key === 'Escape') {
    closeSideBar();
  }
};

burgerRef.addEventListener('click', openSideBar);
closeButtonRef.addEventListener('click', closeSideBar);

// time 1-45-00