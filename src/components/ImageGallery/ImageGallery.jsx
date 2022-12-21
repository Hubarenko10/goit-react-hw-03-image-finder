import { ImageGalleryItem } from "./ImageGalleryItem";
import { ImageGalleryStyled,ImageGalleryListItem } from "./ImageGalleryStyled";
import PropTypes from 'prop-types';


export const ImageGallery = ({photos,onSelect}) => {
return(
    <ImageGalleryStyled>
    {photos.map(({id,tags,webformatURL,largeImageURL}) => {
    return(
        <ImageGalleryListItem key={id}>
            <ImageGalleryItem 
            photos={photos}
            onSelect={onSelect}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            tags={tags}
            />
        </ImageGalleryListItem>
        )
    })}
    </ImageGalleryStyled>
    
    )
}

ImageGallery.propTypes = {
    photos: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  };