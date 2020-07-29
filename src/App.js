import React, { Component } from 'react';
import Header from './Header'
import './App.css';

class App extends Component {
	// componentDidMount() {
	// 	const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}`;
	// 	console.log(url);
	// }

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
		</div>;
	}
}

export default App;
