const burgerRef = document.querySelector('.burger');
const sideBarRef = document.querySelector('.side-bar');
const closeButtonRef = sideBarRef.querySelector('.x-mark');
const sideBarLinksRef = sideBarRef.querySelectorAll('.side-bar__link');

const openSideBar = () => {
  // sideBarRef.classList.add('active'); // don't need if we use gsap
  localStorage.setItem('isOpen', true);
  gsap.set(sideBarLinksRef, { x: -20, opacity: 0 });
  const timeline = gsap.timeline();
  timeline.to(sideBarRef, { x: 0, duration: 0.4 }).to(sideBarLinksRef, {
    x: 0,
    opacity: 1,
    duration: 0.1,
    stagger: 0.1,
    ease: 'elastic',
  });
  window.addEventListener('keydown', closeOnEscape);
};

const closeSideBar = () => {
  // sideBarRef.classList.remove('active'); // don't need if we use gsap
  localStorage.setItem('isOpen', false);
  const timeline = gsap.timeline();
  timeline
    .to(sideBarLinksRef, {
      y: 25,
      opacity: 0,
      duration: 0.4,
      stagger: -0.1,
    })
    .to(sideBarRef, { x: '-100%', duration: 0.4 }, '-=0.4');
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

const isSideBarOpen = JSON.parse(localStorage.getItem('isOpen'));
console.log(isSideBarOpen);

if (isSideBarOpen) {
  openSideBar();
}
