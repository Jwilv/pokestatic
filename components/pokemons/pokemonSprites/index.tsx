import styles from './PokemonSprites.module.css'
import CardSprites from './CardSprites';
import { Sprites } from '@/interfaces';

interface Props {
  imgs : Sprites
}

export const PokemonSprites = ( { imgs } : Props ) => {
  return (
    <div className={styles.spritesBar}>
      <CardSprites img={imgs.front_default}/>
      <CardSprites img={imgs.back_default}/>
      <CardSprites img={imgs.front_shiny}/>
      <CardSprites img={imgs.back_shiny}/>
    </div>
  )
}
