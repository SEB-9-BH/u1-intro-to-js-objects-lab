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

}


//Exercise 1

//console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon[58].name);

//Exercise 2
//console.log(game);

//Exercise 3
game.difficulty = "Med";

//Exercise 4
game.party.push(pokemon[24]);  //push method

//Exercise 5
game.party.push(pokemon[52]);  //push method
game.party.push(pokemon[95]);  //push method
game.party.push(pokemon[111]); //push method

//Exercise 6
game.gyms.forEach(gym => {
  if(gym.difficulty<3){
    gym.completed=true;
  }
});

//Exercise 7
game.party[0]=pokemon[25];

//Exercise 8
for (const pokename of game.party){
  console.log(pokename.name);
}
//Exercise 9
pokemon.forEach((start) =>{
  if(start.starter===true){
    console.log(start.name)
  }

})


//Exercise 10 and 11 Writing this gave me a headache ;-;
game.catchPokemon = function(pokemonObj){
  const caught = pokemon.find(p => p.name.toLowerCase() === pokemonObj.toLowerCase());
  if(caught){
    const pokeball = game.items.find(item => item.name === "pokeball");
    game.party.push(caught);
    if(pokeball && pokeball.quantity>0){
        pokeball.quantity -= 1;   
      }}
  }
game.catchPokemon('Mewtwo');


//Exercise 12
for (let gym of game.gyms){
    if (gym.difficulty<6) {
        gym.completed=true;}
    }
    
//Exercise 13
game.gymStatus = function() {
  const gymTally = {Completed:0 , incomplete:0};

  this.gyms.forEach(gym => {
    if (gym.completed){
      gymTally.Completed++;
    }
    else{
      gymTally.incomplete++;
    }
}
);
  console.log(gymTally);
};
game.gymStatus();



//Exercise 14
game.partyCount = function(){{
  console.log(game.party.length);
  }
}
game.partyCount();


//Exercise 15
for (let gym of game.gyms){
    if (gym.difficulty<8) {
        gym.completed=true;}
    }

//Exercise 16
console.log(game);

