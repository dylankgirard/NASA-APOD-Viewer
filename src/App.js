import React, { Component } from 'react';
import Header from './Header'
import DailyImage from './DailyImage'
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			image: null,
		};
	}

	setImage = (image) => {
		this.setState({ image: image });
	};

	render() {
		return <div>
			<Header />
			<DailyImage setImage={this.setImage} dailyImage={this.state.image}/>
		</div>;
	}
}

export default App;
