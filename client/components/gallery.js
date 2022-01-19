import React from 'react';
import { images } from '../images';

function Gallery () {

	const gallery = images.map(image => (
	<div className='brick'>
		<img src={image} />
	</div>));

	return <div className='wrapper'>
		<h1>Gallery</h1>
		<div className='masonry bordered'>
			{gallery}
		</div>
	</div>
}
export default Gallery;
