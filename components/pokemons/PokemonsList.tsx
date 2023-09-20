import { SmallPokemon } from "@/interfaces"


interface PokemonListProps {
    pokemons : SmallPokemon[]
}
export const PokemonsList = ( { pokemons }: PokemonListProps) => {
  return (
    <div 
    className="poke-container"
    >
      
      {
        pokemons.map(({ id, name, img }) => (
          
        ))
      }
    </div>
  )
}
