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
  //Exercise 10 solution
  catchPokemon(pokemonObj){
    game.party.push(pokemonObj);
  },
  //Exercise 11 soltion
  catchPokemon2(pokemonObj){
    this.items[1].quantity-=1;
    game.party.push(pokemonObj);
  },
  //Exercise 13 solution
  gymStatus(){
    const gymTally={'completed':0,'incomplete':0}
     for (let i = 0; i < game.gyms.length; i++) {
          const status =game.gyms[i];
        if (status.completed === true) {
            gymTally.completed=gymTally.completed + 1;
    }   else if (status.completed === false) {
            gymTally.incomplete = gymTally.incomplete + 1;
    }
  }
  return gymTally;
},
    //Exercise 14 solution
    partyCount(){
        let count=0;
        for (let i = 0; i < game.party.length; i++){
        count+=1;
       }
       return count;
    }
  }
//console.dir(pokemon, { maxArrayLength: null })
//Exercise 1 
pokemon.forEach(pokemonie => {
  if (pokemonie.number === 59) {
    console.log(pokemonie.name);
  }
});
//Exercise 2
console.log(game)
//Exercise 3
game.difficulty='Med';
console.log(game);
//Exercise 4
const PkStarter = pokemon.find(pk => pk.starter === true);
game.party.push(PkStarter);
//console.log(game.party); testing purpose
//Exercise 5
const PkAttribute1 = pokemon.find(pk => pk.type === 'electric');
game.party.push(PkAttribute1);
const PkAttribute2 = pokemon.find(pk => pk.hp === 65);
game.party.push(PkAttribute2);
const PkAttribute3 = pokemon.find(pk => pk.type === 'fighting');
game.party.push(PkAttribute3);
//console.log(game.party); testing purpose
//Exercise 6
for (i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}
//console.log(game.gyms); testing purpose
//Exercise 7
const Evolve = pokemon.find(pk => pk.number === 2);

game.party[0]=Evolve;
//Exercise 8
game.party.forEach(pk=>{
    console.log(pk.name);
    
})
//Exercise 9
pokemon.forEach(pk=>{
    if(pk.starter===true){
        console.log(pk);
        
    }
})
//Exercise 10 solution inside the game object above
game.catchPokemon({number: 77, name: 'Conqueror', type: 'OrangeMasher', hp: 99, starter: true});
console.log(game.party);

//Exercise 11 solution above in the game object
game.catchPokemon2({number: 78, name: 'Conqueror', type: 'OrangeMasherMax', hp: 100, starter: true});
console.log(game.party);
console.log(game.items);
//Exercise 12
for (i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}
//Exercise 13 solution above in the game object
console.log(game.gymStatus());
//Exercise 14 solution above in the game object
console.log(game.partyCount());
//Exercise 15
for (i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 8) {
    game.gyms[i].completed = true;
  }
}
//Exercise 16
console.log(game);
