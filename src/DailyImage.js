import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class DailyImage extends Component {
	render() {
        let data = this.props.dailyData;
		return (
			<div className='daily-info'>
				<h1 className='daily-banner'>Image of the Day</h1>
				<img
					className='daily-image'
					src={data.url}
					alt=''></img>
				<h1 className='daily-banner'>{data.title}</h1>
				<p className='copyright'>{data.copyright}</p>
				<h3 className='date'>{data.date}</h3>
				<p className='explanation'>{data.explanation}</p>
				<Link className='next-page-link'>See Previous Image</Link>
			</div>
		);
	}
}

export default DailyImage;
