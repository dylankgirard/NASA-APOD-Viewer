import React, { Component } from 'react';
import './SearchPage.css';

class SearchPage extends Component {
	render() {
		return (
			<div>
				<h1>Search By Date</h1>
				<img
					className='search-page-logo'
					src={require('./project-images/retro-nasa-logo-black-bg.jpg')}
					alt=''></img>
				<p>Search for an image between 2015-Present</p>
				<form>
					<div className='search-inputs'>
						<input
							className='search-input'
							id='month-input'
							placeholder='MM'
							maxlength='2'></input>
						<input
							className='search-input'
							id='day-input'
							placeholder='DD'
							maxlength='2'></input>
						<input
							className='search-input'
							id='year-input'
							placeholder='YYYY'
							maxlength='4'></input>
					</div>
					<button className='search-button'>Check Selection</button>
				</form>
			</div>
		);
	}
}

export default SearchPage;
