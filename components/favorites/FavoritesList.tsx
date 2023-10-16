import { PokemonItem } from "../pokemons/PokemonItem"
import styles from './Favorites.module.css'

interface Props {
    pokemonsId: number[] | string[]
}

export const FavoritesList = ({ pokemonsId }: Props) => {
    return (
        <div className={styles.favorites}>
            {
                pokemonsId.map((id) => (
                    <PokemonItem key={id} id={id} />
                ))
            }</div>
    )
}
