// const pokemon = require('./data.js');
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

game.difficulty = "Medium";

const pikachu = pokemon.find(p => p.Number === 25);
game.party.push(pikachu);

const fireType = pokemon.find(p => p.Type === "Fire" && !p.Starter);
const highHp = pokemon.find(p => p.HP > 100 && p.Number !== 25);
const grassType = pokemon.find(p => p.Type === "Grass" && p.Number !== 1);

if (fireType) game.party.push(fireType);
if (highHp) game.party.push(highHp);
if (grassType) game.party.push(grassType);

game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

const starterIndex = game.party.findIndex(p => p && p.Number === 25);
const evolvedPikachu = pokemon.find(p => p.Number === 26);

if (starterIndex !== -1 && evolvedPikachu) {
  game.party.splice(starterIndex, 1, evolvedPikachu);
}

const starterPokemon = pokemon.filter(p => p.Starter);
starterPokemon.forEach(p => console.log(p.Name));

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

game.catchPokemon(pokemon.find(p => p.Number === 10));

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeballItem = this.items.find(item => item.name === "pokeball");
  if (pokeballItem) {
    pokeballItem.quantity--;
  }
};

game.catchPokemon(pokemon.find(p => p.Number === 11));
console.log(game.items);

game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});

game.gymStatus = function() {
  const gymTally = { completed: 0, notComplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.notComplete++;
    }
  });
  console.log(gymTally);
};

game.gymStatus();

game.partyCount = function() {
  return this.party.length;
};

console.log(game.partyCount());

game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

console.log("#8:");
game.party.forEach(p => {
  if (p) console.log(p.Name);
});

console.dir(pokemon, { maxArrayLength: null });
console.log(game);

