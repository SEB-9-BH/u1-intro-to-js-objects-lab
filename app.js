//const pokemon = require('./data.js');
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
console.log(game)
game.difficulty = ['mid']
game.party.push(pokemon[3], pokemon[2], pokemon[100], pokemon[145])

for (i = 0; i < game.gyms.length; i++){
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true
        
    }

}
game.party.splice(0,3,pokemon[4], pokemon[3], pokemon[101], pokemon[146])
console.log(game)

game.party.forEach(poke => {
    console.log(poke.name)
})
for (i = 0; i < pokemon.length; i++){
    if (pokemon[i].starter === true) {
        console.log(pokemon[i].name)
        
    }

}

game.catchpokemon = function (pokemonObj) {
    game.party.push(pokemonObj)
    pokeballItems = game.items.find(item => item.name === 'pokeball')

    if (pokeballItems){
        pokeballItems.quantity -= 1
    }

}
game.catchpokemon(pokemon[1])

for (i = 0; i < game.gyms.length; i++){
    if (game.gyms[i].difficulty < 6) {
        game.gyms[i].completed = true
        
    }

}
//game.gymStatus = function (){
const gymTally = {
    completed: 0,
     incomplete: 0
    }
    
    for (let i = 0; i < game.gyms.length; i++){
        if (game.gyms[i].completed === true){
            gymTally.completed++
        }
        else {
            gymTally.incomplete++
        }

    }
    console.log(gymTally)
//}
    

    const partyCount = {poknum: 0}
    for (i = 0; i < game.party.length; i++){
    partyCount.poknum++
    }
    console.log(partyCount.poknum)

    for (i = 0; i < game.gyms.length; i++){
    if (game.gyms[i].difficulty < 8) {
        game.gyms[i].completed = true
        
    }
}


    console.log(game)
