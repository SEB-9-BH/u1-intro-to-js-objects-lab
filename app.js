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
console.log('Exercise 1: ',pokemon[58].name)


//Exercise 2
//console.log(game)


/*
Exercise 3
*/
game.difficulty = 'Med'


/*
Exercise 4
*/
for (let i=0; i<pokemon.length; i++)
{
    if (pokemon[i].starter === true) {
        game.party.push(pokemon[i])
        break
    }
}


/*
Exercise 5
*/
game.party.push(pokemon[2],pokemon[4],pokemon[6])


/*
Exercise 6
*/
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true
  }
}
console.log(game.gyms)



/*
Exercise 7
*/
game.party.splice(0,1,pokemon[1])
console.log(game.party)


/*
Exercise 8
*/
for (let i= 0; i < game.party.length; i++) {
    console.log(game.party[i].name)
}



/*
Exercise 9
*/
for (let i=0; i<pokemon.length; i++)
{
    if (pokemon[i].starter === true) {
        console.log(pokemon[i].name)
    }
}


/*
Exercise 10
*/
game.catchPokemon = function(pokemonObj){
    game.party.push(pokemonObj)
}


/*
Exercise 11
*/
game.catchPokemon = function(pokemonObj){
    game.party.push(pokemonObj)
 
    for (let i = 0; i < game.items.length; i++) {
       if (game.items[i].name === 'pokeball') {
        game.items[i].quantity--
       }
    }

}
game.catchPokemon(pokemon[1])
console.log("After:", game.items)


/*
Exercise 12
*/
    for (let i = 0; i < game.gyms.length; i++) {
       if (game.gyms[i].difficulty < 6) {
        game.gyms[i].completed = true 
       }
    }
    console.log(game.gyms)


/*
Exercise 13
*/
game.gymStatus = function() {
const gymTally = {completed:0 , incomplete:0}

for (let i=0; i<game.gyms.length; i++){

    if (game.gyms[i].completed){
        gymTally.completed++
    }

    else {
         gymTally.incomplete++
    }
}
console.log(gymTally)
}
game.gymStatus()


/*
Exercise 14
*/
game.partyCount = function(){
    return game.party.length
}
console.log("Number of Pokémon in party:",game.partyCount())


/*
Exercise 15
*/
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 8) {
    game.gyms[i].completed = true
  }
}
console.log(game.gyms)


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log('---------------------------------------')
console.log(game)