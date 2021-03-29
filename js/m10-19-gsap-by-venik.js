const burgerRef = document.querySelector('.burger');
const sideBarRef = document.querySelector('.side-bar');
const closeButtonRef = sideBarRef.querySelector('.x-mark');

const openSideBar = () => {
  sideBarRef.classList.add('active');
  window.addEventListener('keydown', closeOnEscape);
};

const closeSideBar = () => {
  sideBarRef.classList.remove('active');
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

// [JS28] М10-19. Библиотеки (22.03.2021) 1:31:00