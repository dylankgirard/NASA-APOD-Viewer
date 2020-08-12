import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import DailyImage from './DailyImage';
import SearchPage from './SearchPage';
import AboutPage from './AboutPage';
import './App.css';
import moment from 'moment';

class App extends Component {
	// Hou comment: No need to pass props into your constructor() and super() since
	// you're not accessing this.props inside the constructor()
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			currentDate: moment(),
		};
	}
	componentDidMount() {
		const url = `https://api.nasa.gov/planetary/apod?api_key=${
			process.env.REACT_APP_NASA_APOD_KEY
		}&date=${this.state.currentDate.format('YYYY-MM-DD')}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let newData = response;
				this.setData(newData);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	setData = (data) => {
		this.setState({ data: data });
	};

	setCurrentDate = (currentDate) => {
		this.setState({ currentDate: currentDate });
	};

	render() {
		// Hou comment: you could use destructuring to extract your state into variables, so you don't have to access them repeatedly in this.state
		// const {
		// 	data,
		// 	currentDate,
		// } = this.state;
		return (
			// Hou comment: <main> is more semantic than <div>
			<main>
				<Header setData={this.setData} setCurrentDate={this.setCurrentDate} />
				<Route
					path='/'
					exact
					render={() => {
						return (
							<DailyImage
								dailyData={this.state.data}
								setData={this.setData}
								currentDate={this.state.currentDate}
								setCurrentDate={this.setCurrentDate}
							/>
						);
					}}
				/>
				<Route
					path='/search-page'
					exact
					render={() => {
						return (
							<SearchPage
								dailyData={this.state.data}
								setData={this.setData}
								currentDate={this.state.currentDate}
								setCurrentDate={this.setCurrentDate}
							/>
						);
					}}
				/>
				<Route
					path='/about-page'
					exact
					// Hou comment: since we are not passing props to AboutPage, which prop can we use instead
					// of render=?
					render={() => {
						return <AboutPage />;
					}}
				/>
			</main>
		);
	}
}

export default App;
