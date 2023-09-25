import ReactImageMagnify from 'react-image-magnify';

interface Props  {
    img: string
}

export const ImgMagnify = ( { img  } : Props) => {
  return (
    
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
  )
}
