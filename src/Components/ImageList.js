import React from 'react';

function createGrid(imageArray) {
	const gridArray = imageArray.map(({id, urls, alt_description}) => {
		return (
			<img key={id} src={urls.regular} alt={alt_description}/>
		)
	});

	return gridArray;
}

const ImageList = (props) => {
	console.log(props.images);
	const images = createGrid(props.images);

	console.log(images);

	return (
		<div>
			{images}
		</div>
	)
}

export default ImageList;