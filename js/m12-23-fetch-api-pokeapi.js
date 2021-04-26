//////// грязный код
// const templateRef = document.querySelector('#markup').innerHTML.trim();
// const pokemonCardTemplate = Handlebars.compile(templateRef);
// const cardContainerRef = document.querySelector('.js-card-container');

// fetch(`https://pokeapi.co/api/v2/pokemon/79`)
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//       const markup = pokemonCardTemplate(pokemon);
//       cardContainerRef.insertAdjacentHTML('beforeend', markup);
//   })
//   .catch(error => console.log(error));

//////// превращаем в чистый код
const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  template: document.querySelector('#markup').innerHTML.trim(),
  searchForm: document.querySelector('.js-search-form'),
  btn: document.querySelector('.btn-primary'),
};

refs.searchForm.addEventListener('submit', onSearch);

const pokemonCardTemplate = Handlebars.compile(refs.template);

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTemplate(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function fetchPokemonById(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => {
      return response.json();
    },
  );
}

function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона');
}

function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;
  if (searchQuery) {
    fetchPokemonById(searchQuery)
      .then(renderPokemonCard)
      .catch(onFetchError)
      .finally(form.reset());
  }
}
