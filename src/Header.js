import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import SearchPage from './SearchPage';

class Header extends Component {
	goToPresentDate = () => {
		let today = moment();
		// console.log(today);

		this.props.setCurrentDate(today);

		let formattedToday = today.format('YYYY-MM-DD');
		console.log(formattedToday);

		const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${formattedToday}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let data = response;
				console.log(url);

				this.props.setData(data);
				// console.log(this.props.dailyData);
			})
			.catch((err) => {
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
							alt=''
						/>
					</Link>
				</div>
				<img
					className='nasa-NASA'
					src={require('./project-images/nasa-NASA-white-bg.jpg')}
					alt=''></img>
				<div className='nav-link-div'>
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
