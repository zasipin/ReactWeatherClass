var React = require('react');
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({
	getInitialState(){
		return {
			isLoading: false
		}
	},
	handleSearch(location){
		var that = this;

		that.setState({
				isLoading: true,
				errorMessage: undefined
			});

		openWeatherMap.getTemp(location)
		.then((temp)=>{
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		})
		.catch((e)=>{
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
			// alert(errMessage);
		});
		// this.setState({
		// 	location: location,
		// 	temp: 23
		// });
	},

  render: function () {
  	var {isLoading, temp, location, errorMessage} = this.state;

  	function renderMessage(){
  		if(isLoading){
  			return <h3 className="text-center">Fetching weather...</h3>
  		} else if (temp && location){
  			return <WeatherMessage location={location} temp={temp}></WeatherMessage>
  		}
  	};

  	function renderError() {
  		if(typeof errorMessage === 'string') {
  			return (
  				<ErrorModal message={errorMessage}/>
  				)
  		} else {
  			return <div></div>;
  		}
  	};

    return (
    	<div>
      		<h1 className="text-center">Get Weather</h1>
      		<WeatherForm onSearch={this.handleSearch}></WeatherForm>      		
      		{renderMessage()}
      		{renderError()}
      	</div>	
    );
  }
});

module.exports = Weather;
