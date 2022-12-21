import { GalleryImg,GalleryItem } from "./ImageGalleryItemStyled"




export const GalleryImg = ({id,smallImg,tags}) => {
return(
    <GalleryItem key={id}>
    <GalleryImg
     src={smallImg}
     alt={tags}
     />
</GalleryItem>
)
}