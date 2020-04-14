import React from 'react';

class SearchBar extends React.Component {
	state = {
		term: ''
	};

	onInputChange = (event) => {
		this.setState({term: event.target.value});
	}


	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input 
							className="" type="text" placeholder="Search for something..." 
							onChange={this.onInputChange} 
							value= {this.state.term} 
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;