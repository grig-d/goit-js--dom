const refs = {
  tags: document.querySelector('.js-tags'),
};

refs.tags.addEventListener('click', onTagsClick);
function onTagsClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentActiveTag = event.currentTarget.querySelector(
    '.tags__btn--active',
  );
  if (currentActiveTag) {
    currentActiveTag.classList.remove('tags__btn--active');
  }
  const nextActiveTag = event.target;
  nextActiveTag.classList.add('tags__btn--active');
}
