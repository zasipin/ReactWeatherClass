var React = require('react');
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({
	getInitialState(){
		return {
			isLoading: false
		}
	},
	handleSearch(location){
		var that = this;

		that.setState({
				isLoading: true
			});

		openWeatherMap.getTemp(location)
		.then((temp)=>{
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		})
		.catch((errMessage)=>{
			that.setState({
				isLoading: false
			});
			alert(errMessage);
		});
		// this.setState({
		// 	location: location,
		// 	temp: 23
		// });
	},

  render: function () {
  	var {isLoading, temp, location} = this.state;

  	function renderMessage(){
  		if(isLoading){
  			return <h3 className="text-center">Fetching weather...</h3>
  		} else if (temp && location){
  			return <WeatherMessage location={location} temp={temp}></WeatherMessage>
  		}
  	}

    return (
    	<div>
      		<h1 className="text-center">Get Weather</h1>
      		<WeatherForm onSearch={this.handleSearch}></WeatherForm>      		
      		{renderMessage()}
      	</div>	
    );
  }
});

module.exports = Weather;
