import styles from './ActiveImg.module.css'
import { useContext } from 'react'
import { activeImgContext } from './Context/ActiveImgContext'
import { ImgMagnify } from './components/ImgMagnify';

export const ActiveImg = () => {

    const { img } = useContext(activeImgContext);

    return (
        <div className={styles.container} >
            <ImgMagnify img={img} />
        </div>
    )
}

