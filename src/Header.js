import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import SearchPage from './SearchPage';

class Header extends Component {
	render() {
		return (
			<nav className='header'>
				<Link to='/'>
					<img
						className='nasa-logo-1'
						src={require('./project-images/nasa-image-white-bg.jpg')}
						alt=''
					/>
					{/* fetch for current day url */}
				</Link>
				<img
					className='nasa-NASA'
					src={require('./project-images/nasa-NASA-white-bg.jpg')}
					alt=''></img>
				<div>
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
