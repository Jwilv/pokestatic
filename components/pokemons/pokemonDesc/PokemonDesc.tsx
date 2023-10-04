import { Pokemon } from '@/interfaces'
import styles from './PokemonDesc.module.css'
import { PokemonTitle } from './components/pokemonTitle/PokemonTitle'
import { PokemonData } from './components/pokemonData/PokemonData'
import { ButtonFav } from './components/buttonFav/ButtonFav'


interface Props {
  pokemon: Pokemon
}

export const PokemonDesc = ({ pokemon }: Props) => {

  return (
    <div className={styles.container}>
      <PokemonTitle title={pokemon.name} />
      <ButtonFav />
      <PokemonData {...pokemon} />
    </div>

  )
}
