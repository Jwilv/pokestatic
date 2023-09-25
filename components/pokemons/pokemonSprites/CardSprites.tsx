import Image from 'next/image'
import styles from './CardSprites.module.css'
import { useContext } from 'react';
import { activeImgContext } from '../ActiveImg/Context/ActiveImgContext';

interface Props {
  img : string;
}

const CardSprites = ({img} : Props ) => {

  const { setImgActive } = useContext(activeImgContext);
  return (
    <div 
    className={styles.cardContainer}
    onClick={() => setImgActive(img)}
    >
      <Image src={img} alt = {img} width={100} height={100} />
    </div>
  )
}

export default CardSprites