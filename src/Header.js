import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
class Header extends Component {
	render() {
		return (
			<nav class='header'>
				<img
					className='nasa-logo-1'
					src={require('./project-images/nasa-image-white-bg.jpg')}
					alt=''></img>
				<img
					className='nasa-NASA'
					src={require('./project-images/nasa-NASA-white-bg.jpg')}
					alt=''></img>
				<div>
					<Link className='nav-links'>Archive</Link>
					<Link className='nav-links'>About</Link>
				</div>
                <div className='mini-banner'>
                    <p>National Aeronautics and Space Administration</p>
                </div>
			</nav>
		);
	}
}

export default Header;
