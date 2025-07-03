const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Exercise 1
// console.dir(pokemon, { maxArrayLength: null });
console.log(pokemon[58].name); // Arcanine

// Exercise 2
// console.log(game);

// Exercise 3
game.difficulty = "Med";

// Exercise 4
game.party.push(pokemon.find(p => p.number === 25)); // Pikachu

// Exercise 5
game.party.push(pokemon.find(p => p.number === 59)); // Arcanine
game.party.push(pokemon.find(p => p.number === 3)); // Venusaur
game.party.push(pokemon.find(p => p.number === 143)); // Snorlax

// Exercise 6
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

// Exercise 7
const starterIndex = game.party.findIndex(p => p.number === 25);
if (starterIndex !== -1) {
  game.party.splice(starterIndex, 1, pokemon.find(p => p.number === 26)); // Raichu
}

// Exercise 8
game.party.forEach(p => console.log(p.name));

// Exercise 9
const starters = pokemon.filter(p => p.starter);
starters.forEach(p => console.log(p.name));

// Exercise 10
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon.find(p => p.number === 1)); // Bulbasaur

// Exercise 11
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeball = this.items.find(i => i.name === 'pokeball');
  if (pokeball) pokeball.quantity--;
};
game.catchPokemon(pokemon.find(p => p.number === 4)); // Charmander
console.log(game.items);

// Exercise 12
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});

// Exercise 13
game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    gym.completed ? gymTally.completed++ : gymTally.incomplete++;
  });
  console.log(gymTally);
};
game.gymStatus();

// Exercise 14
game.partyCount = function() {
  return this.party.length;
};
console.log("Party count:", game.partyCount());

// Exercise 15
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

// Exercise 16
console.log(game);

// Exercise 17
game.party.sort((a, b) => b.hp - a.hp);

// Exercise 18
game.collection = [];
game.catchPokemon = function(pokemonObj) {
  const pokeball = this.items.find(i => i.name === 'pokeball');
  if (pokeball) pokeball.quantity--;

  if (this.party.length < 6) {
    this.party.push(pokemonObj);
  } else {
    this.collection.push(pokemonObj);
  }
};
game.catchPokemon(pokemon.find(p => p.number === 7));
console.log(game.items);

// Exercise 19
game.catchPokemon = function(pokemonObj) {
  const pokeball = this.items.find(i => i.name === 'pokeball');
  if (!pokeball || pokeball.quantity <= 0) {
    console.log("Not enough pokeballs to catch the Pokemon.");
    return;
  }
  pokeball.quantity--;

  if (this.party.length < 6) {
    this.party.push(pokemonObj);
  } else {
    this.collection.push(pokemonObj);
  }
};
game.catchPokemon(pokemon.find(p => p.number === 8));

// Exercise 20
game.catchPokemon = function(pokemonName) {
  const pokeball = this.items.find(i => i.name === 'pokeball');
  if (!pokeball || pokeball.quantity <= 0) {
    console.log("Not enough pokeballs to catch the Pokemon.");
    return;
  }
  const foundPokemon = pokemon.find(p => p.name.toLowerCase() === pokemonName.toLowerCase());
  if (!foundPokemon) {
    console.log("The selected Pokemon does not exist.");
    return;
  }
  pokeball.quantity--;
  if (this.party.length < 6) {
    this.party.push(foundPokemon);
  } else {
    this.collection.push(foundPokemon);
  }
};
game.catchPokemon("Snorlax");

// Exercise 21
const pokemonByType = {};
pokemon.forEach(p => {
  if (!pokemonByType[p.type]) {
    pokemonByType[p.type] = [];
  }
  pokemonByType[p.type].push(p);
});
console.log(pokemonByType);
