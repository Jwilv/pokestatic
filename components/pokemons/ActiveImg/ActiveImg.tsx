import Image from 'next/image'
import styles from './ActiveImg.module.css'
import { useContext } from 'react'
import { activeImgContext } from './Context/ActiveImgContext'
import ReactImageMagnify from 'react-image-magnify';
import { ImgMagnify } from './components/ImgMagnify';

export const ActiveImg = () => {

    const { img } = useContext(activeImgContext);

    return (
        <div className={styles.container} >
            <ImgMagnify img={img} />
        </div>
    )
}

