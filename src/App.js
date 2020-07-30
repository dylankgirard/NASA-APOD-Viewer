import React, { Component } from 'react';
import Header from './Header';
import DailyImage from './DailyImage';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			currentDate: null,
		};
	}
	componentDidMount() {
		const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let newData = response;
				console.log(url);
				this.setData(newData);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	setData = (data) => {
		this.setState({ data: data });
	};

	render() {
		return (
			<div>
				<Header />
				<DailyImage dailyData={this.state.data} setData={this.setData} />
			</div>
		);
	}
}

export default App;
