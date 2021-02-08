const refs = {
  tags: document.querySelector('.js-tags'),
  activeTagOutput: document.querySelector('.js-active-tag'),
};

refs.tags.addEventListener('click', onTagsClick);

function onTagsClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  setActiveTag(event.target);
  updateOutput(event.target.dataset.value);
}

function setActiveTag(nextActiveTag) {
  const currentActiveTag = refs.tags.querySelector('.tags__btn--active');
  if (nextActiveTag === currentActiveTag) {
    currentActiveTag.classList.remove('tags__btn--active');
    return;
  }
  if (currentActiveTag) {
    currentActiveTag.classList.remove('tags__btn--active');
  }
  nextActiveTag.classList.add('tags__btn--active');
}

function updateOutput(value) {
  if (refs.activeTagOutput.textContent === value) {
    refs.activeTagOutput.textContent = '';
    return;
  }
  refs.activeTagOutput.textContent = value;
}
