import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import moment from 'moment';

// Hou comment: during office hours, we already discussed a few refactorings you could do to this component - feel free to DM me to review your code again when you're done implementing the changes we discussed!
class DailyImage extends Component {
	handlePreviousDayClick = () => {
		let today = this.props.currentDate;

		let url = null;

		if (
			today.format('YYYY-MM-DD') === moment('1995-06-20').format('YYYY-MM-DD')
		) {
			let storedDate = moment('1995-06-20').format('YYYY-MM-DD');

			url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${storedDate}`;
		} else {
			this.props.setCurrentDate(today.subtract(1, 'days'));

			let yesterday = today.format('YYYY-MM-DD');

			url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${yesterday}`;
		}
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let previousData = response;

				this.props.setData(previousData);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	handleNextDayClick = () => {
		let today = this.props.currentDate;

		let url = null;

		if (today.date() === moment().date()) {
			let storedDate = today.format('YYYY-MM-DD');
			url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${storedDate}`;
		} else {
			this.props.setCurrentDate(today.add(1, 'days'));

			let tomorrow = today.format('YYYY-MM-DD');

			url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${tomorrow}`;
		}

		// Hou comment: as a follow up challenge, read about the async/await pattern and try to refactor
		// your fetch call to use that pattern: https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let previousData = response;

				this.props.setData(previousData);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	render() {
		// Hou comment: you could use destructuring to extract your props into variables, so you don't have to access them repeatedly in data
		// const {
		// 	url,
		// 	title,
		// 	copyright,
		// 	date,
		// 	explanation
		// } = this.props.dailyData;

		const data = this.props.dailyData;
		const isImage = data.media_type === 'image';
		return (
			<div className='daily-info'>
				<h1 className='top-banner'>Today's APOD Image</h1>
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
					<img className='daily-image' src={data.url} alt='Daily'></img>
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
