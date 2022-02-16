import React from 'react';
import { images } from '../images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function ImageCard (props){
    console.log(props);
    return (
        <>
            <FontAwesomeIcon className='arrow' icon={faChevronLeft}/>
            <img src={images[props.imageId].image}/>
		    <FontAwesomeIcon className='arrow' icon={faChevronRight}/>
        </>
    )
}
 
export default ImageCard;
