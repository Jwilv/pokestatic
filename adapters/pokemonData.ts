import { Pokemon, PokemonPrev } from "@/interfaces";


export const pokemondata = ( data : Pokemon) : PokemonPrev=>{
    const {
        species, stats, id,
        name: namePokemon, types,
        base_experience, abilities,
        height, weight, sprites
    } = data

    const pokemon = {
        species,
        types,
        stats,
        id,
        name: namePokemon,
        base_experience,
        abilities,
        height,
        weight,
        sprites,
    }

    return pokemon
}