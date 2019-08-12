import {
	List
} from 'immutable';
import WeatherData from '~/models/WeatherData';
import weatherClient from './client';
import {
	weatherDataFromResponseData
} from './adapters';

export async function getCurrentWeather(city: string) {

	const {
		data: allWeatherData
	} = await weatherClient.get('/weather', {
		params: {
			q: city
		}
	});

	return weatherDataFromResponseData(allWeatherData);
}

export async function getWeatherForecast(city: string) {

	const {
		data: allWeatherForecast
	} = await weatherClient.get('/forecast', {
		params: {
			q: city
		}
	});
	const datesCache: string[] = [];

	return allWeatherForecast.list.reduce((forecast, item) => {

		const [dateId] = item.dt_txt.split(' ');

		if (datesCache.includes(dateId)) {
			return forecast;
		}

		datesCache.push(dateId);
		return forecast.push(weatherDataFromResponseData(item));
	}, List<WeatherData>());
}
