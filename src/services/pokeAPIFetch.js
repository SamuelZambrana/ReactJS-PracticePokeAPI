
let favoritePokemonList = [];

let count = 6;

let pokemonListApi = [
    {
      "_id": 0,
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/",
      "image":  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "height": 7,
      "weight": 69,
      "type": ["grass", "poison"]
  },
    { 
      "_id": 1,
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
      "height": 10,
      "weight": 130,
      "type": ["grass", "poison"]

    },
    {
      "_id": 2,
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
      "height": 20,
      "weight": 1000,
      "type": ["grass", "poison"]

    },
    {
      "_id": 3,
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      "height": 6,
      "weight": 85,
      "type": ["fire"]
    },
    {
      "_id": 4,
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
      "height": 11,
      "weight": 190,
      "type": ["fire"]
    },
    {  
      "_id": 5,
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/",
      "image":  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
      "height": 17,
      "weight": 905,
      "type": ["fire", "flying"]
    }
]

export const getAllPokemon = () =>
  pokemonListApi.map(({ _id, name, url, image }) => ({ _id, name, url, image })
);


export const getPokemon = (pokemonId) => {
  return pokemonListApi.find(p => p._id === Number(pokemonId));
};



export const createPokemon = (newPokemon) => {
    const aux = {
        ...newPokemon,
        _id: count ++
    }
    pokemonListApi.push(aux)

}


export const modifyPokemon = (p) => {
    const listAux = pokemonListApi.filter(pk => pk._id != p._id)
    listAux.push(p)
    pokemonListApi = listAux
}


export const deletePokemon = (pokemonId) => {
    const listAux = pokemonListApi.filter(p => p._id != pokemonId)
    pokemonListApi = listAux
}

export const addToFavorites = (pokemon) => {
  const exists = favoritePokemonList.some(p => p._id === pokemon._id);
  if (!exists) {
    favoritePokemonList.push(pokemon);
  }
};

export const getFavoritePokemon = () => 
    [...favoritePokemonList];
