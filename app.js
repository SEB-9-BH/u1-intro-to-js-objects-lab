//
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

// Example structure for testing:
const pokemon = [
  { Number: 1, Name: "Bulbasaur", Type: "Grass", HP: 45, starter: true },
  { Number: 2, Name: "Ivysaur", Type: "Grass", HP: 60, starter: false },
  { Number: 4, Name: "Charmander", Type: "Fire", HP: 39, starter: true },
  { Number: 5, Name: "Charmeleon", Type: "Fire", HP: 58, starter: false },
  { Number: 6, Name: "Charizard", Type: "Fire", HP: 78, starter: false },
  { Number: 7, Name: "Squirtle", Type: "Water", HP: 44, starter: true },
  { Number: 8, Name: "Wartortle", Type: "Water", HP: 59, starter: false },
  { Number: 25, Name: "Pikachu", Type: "Electric", HP: 35, starter: true },
  { Number: 26, Name: "Raichu", Type: "Electric", HP: 60, starter: false },
  { Number: 52, Name: "Meowth", Type: "Normal", HP: 40, starter: false },
  { Number: 54, Name: "Psyduck", Type: "Water", HP: 50, starter: false },
  { Number: 59, Name: "Arcanine", Type: "Fire", HP: 90, starter: false },
  { Number: 94, Name: "Gengar", Type: "Ghost", HP: 60, starter: false },
  { Number: 143, Name: "Snorlax", Type: "Normal", HP: 160, starter: false },
];

// Exercise 1
// console.dir(pokemon, { maxArrayLength: null });
console.log(pokemon.find(p => p.Number === 59).Name);

// Exercise 2
// console.log(game);

//Ex3
game.difficulty = "Med";

//Ex4
const starter = pokemon.find(p => p.starter === true && p.Number === 1);
game.party.push(starter);

//Ex5
const p1 = pokemon.find(p => p.Number === 6);
const p2 = pokemon.find(p => p.Number === 94);
const p3 = pokemon.find(p => p.Number === 143);
game.party.push(p1, p2, p3);

//Ex6
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) gym.completed = true;
});

//Ex7
const index = game.party.findIndex(p => p.Number === 1);
const evolved = pokemon.find(p => p.Number === 2);
game.party.splice(index, 1, evolved);

//Ex8
game.party.forEach(pokemon => console.log(pokemon.Name));

//Ex9
const starters = pokemon.filter(p => p.starter);
starters.forEach(p => console.log(p.Name));

//Ex10
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};
const meowth = pokemon.find(p => p.Number === 52);
game.catchPokemon(meowth);

//Ex11
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeballs = this.items.find(item => item.name === "pokeball");
  if (pokeballs) pokeballs.quantity--;
};
const psyduck = pokemon.find(p => p.Number === 54);
game.catchPokemon(psyduck);
console.log(game.items);

//Ex12
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) gym.completed = true;
});

//Ex13
game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) gymTally.completed++;
    else gymTally.incomplete++;
  });
  console.log(gymTally);
};
game.gymStatus();

//Ex14
game.partyCount = function() {
  return this.party.length;
};
console.log("Party count:", game.partyCount());

//Ex15
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) gym.completed = true;
});

//Ex16
console.log(game);