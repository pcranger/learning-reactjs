import './ImageList.css'
import ImageCard from './ImageCard'
import React from 'react'

//image is iterator and the object we see 
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })


    return <div className="image-list">{images}</div>
    //we take list of images from props and return it to render
}
export default ImageList