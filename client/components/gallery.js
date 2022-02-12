import React from 'react';
import { images } from '../images';

function Gallery () {

	const gallery = images.map(data => (
	<div className='brick'>
		<img src={data.image} />
	</div>));

	return <div className='wrapper'>
		<h1>Gallery</h1>
		<div className='masonry bordered'>
			{gallery}
		</div>
	</div>
}
export default Gallery;
