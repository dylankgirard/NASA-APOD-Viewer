import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Hou comment: since Header does not rely on state, can we use a functional component instead?
class Header extends Component {
	goToPresentDate = () => {
		let today = moment();

		this.props.setCurrentDate(today);

		let formattedToday = today.format('YYYY-MM-DD');

		const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${formattedToday}`;

		// Hou comment: as a follow up challenge, read about the async/await pattern and try to refactor
		// your fetch call to use that pattern: https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				this.props.setData(response);
			})
			.catch((err) => {
				// Hou comment: consider displaying a useful error message to the user instead
				console.error(err);
			});
	};

	render() {
		return (
			<nav className='header'>
				<div className='home-link'>
					<Link to='/' onClick={this.goToPresentDate}>
						<img
							className='nasa-logo-1'
							src={require('./project-images/nasa-image-white-bg.jpg')}
							alt='Modern NASA Logo'
						/>
					</Link>
				</div>
				<img
					className='nasa-NASA'
					src={require('./project-images/nasa-NASA-white-bg.jpg')}
					alt='NASA Worm Logo'></img>
				<div className='nav-link-div'>
					<Link to='/' className='nav-links' onClick={this.goToPresentDate}>
						Home
					</Link>
					<Link to='/search-page' className='nav-links'>
						Search
					</Link>
					<Link to='/about-page' className='nav-links'>
						About
					</Link>
				</div>
				<div className='mini-banner'>
					<p>National Aeronautics and Space Administration</p>
				</div>
			</nav>
		);
	}
}

export default Header;
