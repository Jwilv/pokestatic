import { Pokemon } from "@/interfaces";


export const pokemondata = ( data : Pokemon)=>{
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