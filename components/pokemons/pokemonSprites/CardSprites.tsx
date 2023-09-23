import Image from 'next/image'
import styles from './CardSprites.module.css'

interface Props {
  img : string;
}

const CardSprites = ({img} : Props ) => {
  return (
    <div className={styles.cardContainer}>
      <Image src={img} alt = {'aaa'} width={100} height={100} />
    </div>
  )
}

export default CardSprites