import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

import './App.css'

class App extends React.Component {
	async onSearchSubmit(term) {
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
		const response = await axios
			.get('https://api.unsplash.com/search/photos', {
				params: {
					query: term
				},
				headers: {
					Authorization: 'Client-ID NcV8kR20uZg3pTZn0tNqqijNC36HNGxolDe0K9ywrgA'
				}
			});
		
		console.log(response.data.results);
	}


	render() {
		return (
			<div className="ui container app">
				<SearchBar onSubmit={this.onSearchSubmit}/>
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