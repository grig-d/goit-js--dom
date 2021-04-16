const promise = new Promise((resolve, reject) => {
  const canFullfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFullfill) {
      resolve('V - Выполнен успешно - передача во внешний код');
    }
    reject('X - Отклонён - передача во внешний код');
  }, 200);
});

promise.then(onFullfilled, onRejected);

function onFullfilled(result) {
  console.log(result);
}
function onRejected(error) {
  console.log(error);
}

// promisification
// "keywords": "#FA842B",
// "types": "#DDA0DD", // RAL 2003

const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log('onFetchSuccess -> onFetchSuccess');
  console.log(pokemon);
}

function onFetchError(error) {
  console.log('onFetchError -> onFetchError');
  console.log(error);
}
