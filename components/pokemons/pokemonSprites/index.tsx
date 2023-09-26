import styles from './PokemonSprites.module.css'
import CardSprites from './CardSprites';
import { Sprites } from '@/interfaces';

interface Props {
  sprites : Sprites;
  imgDefault : string;
}

export const PokemonSprites = ( { sprites, imgDefault } : Props ) => {
  return (
    <div className={styles.spritesBar}>
      <CardSprites img={imgDefault}/>
      <CardSprites img={sprites.front_default}/>
      <CardSprites img={sprites.back_default}/>
      <CardSprites img={sprites.front_shiny}/>
      <CardSprites img={sprites.back_shiny}/>
    </div>
  )
}
