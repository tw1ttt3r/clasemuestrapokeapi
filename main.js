const url = 'https://pokeapi.co/api/v2/pokemon/';

const section = document.querySelector('#data');
const botones = document.querySelector('#botonera');
const titulo = document.querySelector('h1');

console.log('section', section);

navega(url);

function escribePokemons(data) {
    console.log(data)
    botones.innerHTML = `<button onclick="navega('${data.previous}')" "${data.previous === null ? " disabled" : ""}>Anterior</button> <button  onclick="navega('${data.next}')" ${data.next === null ? " disabled" : ""}>Siguiente</button>`;
    titulo.innerHTML = `Total de pokemons: ${data.count}`;

    let pokemons = '';
    data.results.forEach( (pokemon, index) => pokemons += `<p>${index} - ${pokemon.name}</p>`);
    section.innerHTML = pokemons;
}

function navega(url) {
    fetch(url)
    .then( respuesta => respuesta.json())
    .then( dataPokemon => escribePokemons(dataPokemon))
}