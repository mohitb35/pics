import React from 'react';
import axios from 'axios';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

import './App.css'

class App extends React.Component {
	state = {
		images: []
	}

	// Arrow function in order to preserve the "this" of the App object
	onSearchSubmit = async (term) => {
		// Using promise chain
		/* axios.get('https://api.unsplash.com/search/photos', {
			params: {
				query: term
			},
			headers: {
				Authorization: 'Client-ID NcV8kR20uZg3pTZn0tNqqijNC36HNGxolDe0K9ywrgA'
			}
		})
		.then((response) => {
			console.log(response.data.results);
		})
		.catch((error) => {
			console.log(error);
		}) */

		// Using await async
		const response = await unsplash.get('/search/photos', {
			params: {
				query: term
			}
		});
		
		this.setState({
			images: response.data.results
		});
	}


	render() {
		return (
			<div className="ui container app">
				<SearchBar onSubmit={this.onSearchSubmit}/>
				Found: {this.state.images.length} images
			</div>
		)
	}
}


// Functional component - converted to class based component, so the commented out code is discarded.
/* const App = () => {
	return (
		<div className="ui container app">
			<SearchBar on/>
		</div>
	)
} */

export default App;