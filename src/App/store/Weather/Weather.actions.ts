import {
	SetWeatherInfoPayload
} from './Weather.types';
import {
	getCurrentWeather,
	getWeatherForecast
} from '~/services/weather';
import {
	WeatherReducer
} from './Weather.reducer';

export abstract class WeatherActions extends WeatherReducer.Actions {

	async loadWeatherInfo(city: string) {

		const weatherForecast = await getWeatherForecast(city);
		const currentWeather = await getCurrentWeather(city);

		this.setWeatherInfo({
			city,
			currentWeather,
			weatherForecast
		});
	}

	abstract setWeatherInfo(payload: SetWeatherInfoPayload);
}
