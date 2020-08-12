import React, { Component } from 'react';
import './SearchPage.css';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

class SearchPage extends Component {
		// Hou comment: No need to pass props into your constructor() and super() since
		// you're not accessing this.props inside the constructor()
	constructor(props) {
		super(props);
		this.state = {
			month: '',
			day: '',
			year: '',
			redirect: false,
			showBanner: false,
		};
	}

	// Redirect strategy suggested here: https://medium.com/@anneeb/redirecting-in-react-4de5e517354a

	setRedirect = () => {
		this.setState({
			redirect: true,
		});
	};

	renderRedirect = () => {
		if (this.state.redirect) {
			return <Redirect to='/' />;
		}
	};

	dateValidator = (date) => {
		if (moment(date).isBetween('1995-06-19', moment())) {
			return moment(date).isValid();
		}
	};

	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// Hou comment: you could use destructuring to extract your state into variables at the top of the function, so you don't have to access them repeatedly in this.state
		// const {
		// 	year,
		// 	month,
		// 	day
		// } = this.state

		let searchDate = `${this.state.year}-${this.state.month}-${this.state.day}`;
		if (this.dateValidator(searchDate)) {
			this.props.setCurrentDate(
				moment()
					.year(this.state.year)
					.month(this.state.month - 1)
					.date(this.state.day)
			);				

			const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${searchDate}`;

			fetch(url)
				.then((response) => response.json())
				.then((response) => {
					this.props.setData(response);
				})
				.catch((err) => {
					console.error(err);
				});

			this.setRedirect();
		} else {
			this.setState({ showBanner: true, month: '', day: '', year: '' });
		}
	};

	render() {
		// Hou comment: consider extracting the state variables by destructuring this.state
		return (
			// Hou comment: you can use a React fragment <></> here instead of creating an unnecessary div tag: https://reactjs.org/docs/fragments.html
			<>
				<h1 className='search-banner'>Search By Date</h1>
				<img
					className='search-page-logo'
					src={require('./project-images/retro-nasa-logo-black-bg.jpg')}
					alt='Retro NASA Logo'></img>
				<p>
					Search for an APOD image between
					<br />
					June 20th, 1995 and Present-Day
				</p>
				<form className='search-form' onSubmit={this.handleSubmit}>
					<div className='search-inputs'>
						<input
							className='search-input'
							id='month'
							placeholder='MM'
							min='1'
							type='number'
							value={this.state.month}
							onChange={this.handleChange}></input>
						<input
							className='search-input'
							id='day'
							placeholder='DD'
							min='1'
							type='number'
							value={this.state.day}
							onChange={this.handleChange}></input>
						<input
							className='search-input'
							id='year'
							placeholder='YYYY'
							min='1'
							type='number'
							value={this.state.year}
							onChange={this.handleChange}></input>
					</div>
					{this.renderRedirect()}
					<button className='search-button'>View Entry</button>
					{this.state.showBanner && (
						<p className='not-valid'>Not A Valid Date</p>
					)}
				</form>
			</>
		);
	}
}

export default SearchPage;
