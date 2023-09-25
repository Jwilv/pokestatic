import { Pokemon } from '@/interfaces'
import styles from './PokemonDesc.module.css'


interface Props {
  pokemon: Pokemon
}

export const PokemonDesc = ( { pokemon } : Props) => {
  return (
    <h1 className={styles.title}>{pokemon.name}</h1>
    
  )
}
