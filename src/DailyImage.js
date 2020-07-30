import React, { Component } from 'react';
// May need this in case of API breakdown
import { altData } from './data';
console.log(altData);

class DailyImage extends Component {
	handlePreviousDayClick = () => {
		let today = new Date();
		let yesterday =
			today.getFullYear() +
			'-' +
			(today.getMonth() + 1) +
			'-' +
			(today.getDate() - 1);
		console.log(yesterday);

		let url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${yesterday}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let previousData = response;
				console.log(url);
				
				this.props.setData(previousData);
				console.log(this.props.dailyData);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	render() {
		let data = this.props.dailyData;

		return (
			<div className='daily-info'>
				<h1 className='daily-banner'>Image of the Day</h1>
				<img className='daily-image' src={data.url} alt=''></img>
				<h1 className='daily-banner'>{data.title}</h1>
				<p className='copyright'>{data.copyright}</p>
				<h3 className='date'>{data.date}</h3>
				<p className='explanation'>{data.explanation}</p>
				<button
					className='next-page-link'
					onClick={this.handlePreviousDayClick}>
					See Previous Day
				</button>
			</div>
		);
	}
}

export default DailyImage;
