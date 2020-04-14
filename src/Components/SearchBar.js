import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input className="" type="text" placeholder="Search for something..."/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;