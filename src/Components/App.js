import React from 'react';

import './App.css'

import SearchBar from './SearchBar';

class App extends React.Component {
	onSearchSubmit(term) {
		console.log(term);
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