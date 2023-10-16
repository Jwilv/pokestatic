import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";


interface Props  {
    PokemonId : number | string;
}

export const getPokemonData = async( {PokemonId} : Props )=>{
    const { data } = await pokeApi.get<Pokemon>(`pokemon/${PokemonId}`);

    return data 
}