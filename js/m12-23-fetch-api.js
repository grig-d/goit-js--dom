// fetch(`https://pokeapi.co/api/v2/pokemon/79`)
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//     document
//       .querySelector('body')
//       .insertAdjacentHTML(
//         'beforeend',
//         `<div style="text-align: center;"><img src="${pokemon.sprites.front_default}"/><p>${pokemon.name}</p></div>`,
//       );
//   })
//   .catch(error => console.log(error));


const templateObject = document.querySelector('#markup').innerHTML.trim();
console.log(templateObject);
const markup = Handlebars.compile(templateObject);
document.querySelector('body').insertAdjacentHTML('beforeend', markup);
console.log(markup);

// 0-50-00