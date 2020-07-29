import React, { Component } from 'react';
import Header from './Header'
import DailyImage from './DailyImage'
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
	}

	setData = (data) => {
		this.setState({ data: data });
	};

	render() {
		return <div>
			<Header />
			<DailyImage setData={this.setData} dailyData={this.state.data}/>
		</div>;
	}
}

export default App;
