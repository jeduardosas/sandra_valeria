import ImageGallery from 'react-image-gallery'
import getArray from '../functions/getArray';
import 'react-image-gallery/styles/css/image-gallery.css'

const Slider = () => {
  const images = [];

  getArray(8, images);

  return(
    <div style={{width:'95vw',margin:'auto'}}>
      <h3 className='slider-title'>Galeria </h3>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={true}
        showBullets={false}
        showNav={false}
        autoPlay={true}
        slideDuration={1000}
      />
    </div>
  )
};

export default Slider;
