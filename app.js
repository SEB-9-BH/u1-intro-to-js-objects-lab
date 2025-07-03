
/*Exercise 1*/

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

console.dir(pokemon, { maxArrayLength: null })

/*Exercise 2*/

console.log(game)


/*Exercise 3*/

 game.difficulty=["Easy","Med","Hard"]


/*Exercise 4*/

game.party.push(pokemon[0]);


/*Exercise 5*/

game.party.push(pokemon[7])
game.party.push(pokemon[24])
game.party.push(pokemon[36])


/*Exercise 6*/

for (let i=0; i < game.gyms.length; i++){
    if (game.gyms[i].difficulty < 3){
        game.gyms[i].completed = 'true';
    }
}


/*Exercise 7*/

const UpdatedPokemon = { ...pokemon[0], name: 'Ivysaur'}
pokemon.slice(0,1,UpdatedPokemon);
console.log(UpdatedPokemon);

/*Exercise 8*/


for (let i=0; i < pokemon.length; i++){
    console.log(pokemon[i].name)
}

console.log ('----------------------------------------------')


/*Exercise 9*/


for (let i=0; i < game.party.length; i++){
    console.log(game.party[i].name);
}

console.log ('----------------------------------------------')

/*Exercise 10*/


//Adding the catchPokemon method
game.catchPokemon = function(pokemonObj){
    game.party.push(pokemonObj);
}

//Calling the method with a pokemon from my choice from the list
const beedrill = pokemon.find(p => p.name === "Beedrill");
game.catchPokemon(beedrill);


//Confirming it has been added
game.party.forEach(p => {
    console.log(p.name);
});


console.log ('----------------------------------------------')

/*Exercise 11*/

game.catchPokemon = function(pokemonObj) {
    //Adding the Pokemon to the party
    game.party.push(pokemonObj);

    //Finding the pokeball item in the inventory
    const pokeball = game.item.find(item => item.name === "pokeball");

    //Decreasing the quantity by 1
    if (pokeball) {
        pokeball.quantity = pokeball.quantity - 1;
    }
}

/*Exercise 12*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});

game.gyms.forEach(gym => {
    if (gym.difficulty < 6){
        gym.completed = true;
    }
});

/*Exercise 13*/


game.gymStatus = function() {
    const gymTally = { 
        complete: 0, incomplete: 0 
    };

    game.gyms.forEach(gym => {
        if (gym.completed) {
            gymTally.complete ++
        }else{
            gymTally.incomplete ++
        }
    });

    console.log(gymTally);
};

game.gymStatus();



/*Exercise 14*/


game.partyCount = function () {
    return pokemon.length;
}

console.log(game.partyCount())


/*Exercise 15*/

game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

game.gyms.forEach(gym => {
    if (gym.difficulty < 8){
        gym.completed = true;
    }
});


/*Exercise 16*/

console.log(game);