import React, { Component } from 'react';
import ReactPlayer from 'react-player';
// May need this in case of API breakdown
// import { altData } from './data';

class DailyImage extends Component {
	handlePreviousDayClick = () => {
		let today = this.props.currentDate;
		// console.log(today);

		let yesterday = today.format('YYYY-MM-DD');

		console.log(yesterday);
		this.props.setCurrentDate(today.subtract(1, 'days'));

		const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${yesterday}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let previousData = response;
				// console.log(url);

				this.props.setData(previousData);
				// console.log(this.props.dailyData);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	handleNextDayClick = () => {
		let today = this.props.currentDate;
		// console.log(today);

		let tomorrow = today.format('YYYY-MM-DD');

		console.log(tomorrow);
		this.props.setCurrentDate(today.add(1, 'days'));

		const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${tomorrow}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let previousData = response;
				// console.log(url);

				this.props.setData(previousData);
				// console.log(this.props.dailyData);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	render() {
		const data = this.props.dailyData;
		const isImage = data.media_type === 'image';
		return (
			<div className='daily-info'>
				<h1 className='daily-banner'>Image of the Day</h1>
				<div>
					<button
						className='front-page-button'
						onClick={this.handlePreviousDayClick}>
						Previous Day
					</button>
					<button
						className='front-page-button'
						onClick={this.handleNextDayClick}>
						Next Day
					</button>
				</div>
				{isImage ? (
					<img className='daily-image' src={data.url} alt=''></img>
				) : (
					<ReactPlayer className='daily-video' url={data.url} />
				)}
				<h1 className='daily-banner'>{data.title}</h1>
				<p className='copyright'>{data.copyright}</p>
				<h3 className='date'>{data.date}</h3>
				<p className='explanation'>{data.explanation}</p>
			</div>
		);
	}
}

export default DailyImage;
