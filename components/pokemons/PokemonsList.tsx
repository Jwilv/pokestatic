import { SmallPokemon } from "@/interfaces"
import { PokemonItem } from "./PokemonItem"


interface PokemonListProps {
    pokemons: SmallPokemon[]
}
export const PokemonsList = ({ pokemons }: PokemonListProps) => {
    return (
        <div
            className="poke-container"
        >

            {
                pokemons.map((pokemon) => (
                    <PokemonItem key={pokemon.id} {...pokemon} />
                ))
            }
        </div>
    )
}
