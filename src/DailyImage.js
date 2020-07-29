import React, { Component } from 'react';

class DailyImage extends Component {
	componentDidMount() {
		const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_APOD_KEY}`;
		console.log(url);

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
                let newImage = response.url;
                console.log(newImage);
				this.props.setImage(newImage);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		console.log(this.props.DailyImage);
		return (
			<div>
				<img class='daily-image' src={this.props.dailyImage} alt=''></img>
			</div>
		);
	}
}

export default DailyImage;
