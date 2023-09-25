import Image from 'next/image'
import styles from './ActiveImg.module.css'
import { useContext } from 'react'
import { activeImgContext } from './Context/ActiveImgContext'
import ReactImageMagnify from 'react-image-magnify';

export const ActiveImg = () => {

    const { img } = useContext(activeImgContext);

    return (
        <div className={styles.container} >
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: img
                },
                largeImage: {
                    src: img,
                    width: 900,
                    height: 900
                },
                enlargedImageContainerDimensions: { width: '150%', height: '100%' },
                enlargedImageContainerStyle: {
                    'background-color': 'white'
                }
            }} />
        </div>
    )
}

