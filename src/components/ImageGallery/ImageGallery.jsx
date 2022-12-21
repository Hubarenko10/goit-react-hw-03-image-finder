import { GalleryImg } from "components/ImageGalleryItem/ImageGalleryItemStyled";
import { ImageGalleryStyled,GalleryItem } from "./ImageGalleryStyled";


export const ImageGallery= ({photo}) => {
return(
    <ImageGalleryStyled>
    {photo.map(({id,webformatURL,tags}) => {
    return(
        <GalleryItem key={id}>
            <GalleryImg
            smallImg={webformatURL}
            tags={tags}
            />
        </GalleryItem>
        )
    
    })}    
    </ImageGalleryStyled>
    )
}
