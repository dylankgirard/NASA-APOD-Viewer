import React, { Component } from 'react';
import './SearchPage.css';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			month: '',
			day: '',
			year: '',
			valid: false,
			redirect: false,
			warningBanner: '',
		};
	}

	// Redirect strat suggested here: https://medium.com/@anneeb/redirecting-in-react-4de5e517354a 

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

	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
		// console.log({ [event.target.id]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.setCurrentDate(
			moment()
				.year(this.state.year)
				.month(this.state.month - 1)
				.date(this.state.day)
		);

		let searchDate = `${this.state.year}-${this.state.month}-${this.state.day}`;

		const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}&date=${searchDate}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let newData = response;
				// console.log(url);
				this.props.setData(newData);
			})
			.catch((err) => {
				console.error(err);
			});

		this.setRedirect();
		// console.log(this.props.currentDate);
	};

	render() {
		// moment().year(YYYY).month(MM).date(DD)
		return (
			<div>
				<h1>Search By Date</h1>
				<img
					className='search-page-logo'
					src={require('./project-images/retro-nasa-logo-black-bg.jpg')}
					alt=''></img>
				<p>Search for an image between 2015-Present</p>
				<form onSubmit={this.handleSubmit}>
					<div className='search-inputs'>
						<input
							className='search-input'
							id='month'
							placeholder='MM'
							type='number'
							// maxLength='2'
							value={this.state.month}
							onChange={this.handleChange}></input>
						<input
							className='search-input'
							id='day'
							placeholder='DD'
							// max={2}
							type='number'
							value={this.state.day}
							onChange={this.handleChange}></input>
						<input
							className='search-input'
							id='year'
							placeholder='YYYY'
							// max='4'
							type='number'
							value={this.state.year}
							onChange={this.handleChange}></input>
					</div>
					{this.renderRedirect()}
					<button
						className='search-button'
						// type='submit'
						onClick={() => {}}>
						See Results
					</button>
				</form>
			</div>
		);
	}
}

export default SearchPage;
