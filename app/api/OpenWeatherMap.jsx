import axios from 'axios';

const key = '61c0547f277bf21ab39a9567aa4bbdd4';
const openweathermapUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;

export default {
	getTemp(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${openweathermapUrl}&q=${encodedLocation}`;
		return axios.get(requestUrl).then((response)=>{
			if(response.data.cod && response.data.message){
				// throw new Error(response.data.message);				
				throw new Error("Unable to fetch weather for that location.");				
			} else {
				return response.data.main.temp;
			}
			// return 
		}
		// , (response)=>{
		// 	// console.log(response);
		// 	throw new Error(response.message);
		// 	}
		)
		.catch((response)=>{
			console.log(response);
			throw new Error(response.message);
		})
		;
	}
}