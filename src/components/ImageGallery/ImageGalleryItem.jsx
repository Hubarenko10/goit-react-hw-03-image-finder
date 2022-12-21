import PropTypes from 'prop-types';
import { ImageGalleryItemStyle } from './ImageGalleryItemStyle';

export const ImageGalleryItem = ({smallImg,largeImg,tags,onSelect}) => {
<ImageGalleryItemStyle
src={smallImg} 
alt={tags}
onClick={() => {
onSelect(largeImg);
}}
/>
}


ImageGalleryItemStyle.propTypes = {
    smallImg: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };