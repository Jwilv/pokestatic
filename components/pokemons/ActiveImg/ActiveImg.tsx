import Image from 'next/image'
import styles from './ActiveImg.module.css'
import { useContext } from 'react'
import { activeImgContext } from './Context/ActiveImgContext'
import ReactImageMagnify from 'react-image-magnify';

export const ActiveImg = () => {

    const { img } = useContext(activeImgContext);

    return (
        <div className={styles.container} >
            {/* <Image src={img} alt={img} width={500} height={500} /> */}
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: img
                },
                largeImage: {
                    src: img,
                    width: 800,
                    height: 800
                },
                isHintenable: true,
                enlargedImageContainerDimensions: { width: '100%', height: '100%' }
            }} />
        </div>
    )
}

