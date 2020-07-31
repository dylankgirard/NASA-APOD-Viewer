import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import DailyImage from './DailyImage';
import SearchPage from './SearchPage';
import './App.css';
import moment from 'moment';
// import { Route } from 'react-router-dom';

class App extends Component {
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
		}&date=${moment().format('YYYY-MM-DD')}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let newData = response;
				// console.log(url);
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
		return (
			<div>
				<Header />
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
						return <SearchPage />;
					}}
				/>
			</div>
		);
	}
}

export default App;
