import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class DailyImage extends Component {
	render() {
		return (
			<div className='daily-info'>
				<h1 className='daily-banner'>Image of the Day</h1>
				<img
					className='daily-image'
					src={this.props.dailyData.url}
					alt=''></img>
				<h1 className='daily-banner'>{this.props.dailyData.title}</h1>
				<p className='copyright'>{this.props.dailyData.copyright}</p>
				<h3 className='date'>{this.props.dailyData.date}</h3>
				<p className='explanation'>{this.props.dailyData.explanation}</p>
				<Link className='next-page-link'>See Previous Image</Link>
			</div>
		);
	}
}

export default DailyImage;
