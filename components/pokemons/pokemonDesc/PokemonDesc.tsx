import { Pokemon } from '@/interfaces'
import styles from './PokemonDesc.module.css'
import { PokemonTitle } from './components/pokemonTitle/PokemonTitle'
import { PokemonData } from './components/pokemonData/PokemonData'


interface Props {
  pokemon: Pokemon
}

export const PokemonDesc = ({ pokemon }: Props) => {

  return (
    <div className="">
      <PokemonTitle title={pokemon.name} />
      <PokemonData {...pokemon} />
    </div>

  )
}
