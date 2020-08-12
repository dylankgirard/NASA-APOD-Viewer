import React, { Component } from 'react';
import './AboutPage.css';

// Hou comment: As a follow-up challenge, how would you refactor AboutPage to use a functional component + Hooks? In general, how would you refactor your class components that don't rely state to use functional components?
class AboutPage extends Component {
	render() {
		return (
			// Hou comment: you can use a React fragment <></> here instead of creating an unnecessary div tag: https://reactjs.org/docs/fragments.html
			<>
				<h1 className='about-banner'>About This App</h1>
				<img
					className='about-page-logo'
					src={require('./project-images/nasa-old-school.jpg')}
					alt='Old-school NASA logo'></img>
				<p className='about-info'>
					This application was created by Dylan Girard in celebration of space
					exploration and humanity's continuous journey to go beyond the
					boundaries of our world.
				</p>
				<p className='about-info'>
					The app itself runs using ReactJS, and utilizes NASA's Astronomy
					Picture of the Day API, an archive which contains data reaching back
					to June of 1995.
				</p>
				<div className='about-anchor-div'>
					<a
						className='about-anchor'
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/in/dylankgirard/'>
						LinkedIn
					</a>
					<a
						className='about-anchor'
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/dylankgirard/NASA-Astronomy-Image-of-the-Day-App'>
						GitHub
					</a>
				</div>
			</>
		);
	}
}

export default AboutPage;
