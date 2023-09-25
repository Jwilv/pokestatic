import styles from './ActiveImg.module.css'
import { useContext } from 'react'
import { activeImgContext } from './Context/ActiveImgContext'
import Image from 'next/image';

export const ActiveImg = () => {

    const { img } = useContext(activeImgContext);

    return (
        <div className={styles.container} >
            <Image src={img} alt={img} height={300} width={300} />
        </div>
    )
}

