import React from 'react';

import ImageCard from './ImageCard';

import './ImageList.css';

function createGrid(imageArray) {
	const gridArray = imageArray.map((image) => {
		return (
			<ImageCard key={image.id} image={image} />
		)
	});

	return gridArray;
}

const ImageList = (props) => {
	console.log("Images in API response:", props.images);
	const images = createGrid(props.images);

	console.log("List of images:", images);

	return (
		<div className="image-list">
			{images}
		</div>
	)
}

export default ImageList;