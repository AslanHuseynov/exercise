//davaleba1
fetch('https://pokeapi.co/api/v2/pokemon/6')
    .then(data => data.json())
    .then(pokemonData => ({
        id: pokemonData.id,
        base_experience: pokemonData.base_experience,
        height: pokemonData.height,
        name: pokemonData.name,
        weight: pokemonData.weight,
        stats: pokemonData.stats
    }))
    .catch(e => console.error(e));


  //davaleba2
    function StrongestStat(pokemon) {
        let strongestId = 0;
    
        pokemon.stats.forEach((stat, id) => {
            if (pokemon.stats[strongestId].base_stat < stat.base_stat) {
                strongestId = id;
            }
        });
    
        return strongestId;
    }

    //davaleba3
    function PokemonFight(pokemon1, pokemon2) {
        const pokemon1Attack = pokemon1.stats.find(stat => stat.name === 'attack').base_stat;
        const pokemon2Attack = pokemon2.stats.find(stat => stat.name === 'attack').base_stat;    
    
        const pokemon1AttacksRequiredToWin = Math.ceil(pokemon2.weight / pokemon1Attack);
        const pokemon2AttacksRequiredToWin = Math.ceil(pokemon1.weight / pokemon2Attack);
    
        if (pokemon1AttacksRequiredToWin >= pokemon2AttacksRequiredToWin) {
            return { name: pokemon1.name, weight_remaining: pokemon1.weight - pokemon2Attack * (pokemon1AttacksRequiredToWin - 1) };
        }
    
        return { name: pokemon2.name, weight_remaining: pokemon2.weight - pokemon1Attack * pokemon2AttacksRequiredToWin };
    }