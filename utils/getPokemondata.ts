import { pokemondata } from "@/adapters/pokemonData";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonData = async( PokemonId : number | string ) =>{
    const { data } = await pokeApi.get<Pokemon>(`pokemon/${PokemonId}`);

    return pokemondata(data); 
}