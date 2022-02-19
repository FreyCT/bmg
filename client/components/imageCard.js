// import React from 'react';
// import { images } from '../images';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// function ImageCard (props){
//     console.log(props);
//     return (
//         <>
//             <FontAwesomeIcon className='arrow' icon={faChevronLeft}/>
//             <img src={images[props.imageId].image}/>
// 		    <FontAwesomeIcon className='arrow' icon={faChevronRight}/>
//         </>
//     )
// }

// React Components
import { memo, useState} from 'react';
// Components
import { CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { motion } from 'framer-motion';
//Hooks
import useWindowDimensions from '../hooks/windowDimensions';

const ImageCard = memo(({ title, explanation, url, date }) => {
	const [seeMore, setSeeMore] = useState(true);
	const { height, width } = useWindowDimensions();

	// Expand Photo and Read All Text
	const togglePhotoExpansion = () => {
		setSeeMore(!seeMore);
	};

	return (
		<motion.div style={{margin: 'auto'}}>
			<div style={{ display: width > 900 && 'flex' , alignItems: 'center'}}>
				<CardImg style={seeMore ? { width: `auto`, maxWidth: `${width/3}px`, height: 'auto' } : { objectFit: 'fill', width: '20%', height: 'auto' }} src={url} alt={url} />
				{seeMore && ( 
					<CardBody style={{margin: 'auto'}}>
						<CardTitle tag="h5" style={{ overflow: 'auto', textOverflow: 'ellipsis', whiteSpace: seeMore ? '' : 'nowrap' }}>
							{title}
						</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							{date}
						</CardSubtitle>
						<CardText className={seeMore ? '' : 'card-text-hidden'}>{explanation}</CardText>
					</CardBody>
				)}
			</div>
		</motion.div>
	);
});

export default ImageCard;