import 'dotenv/config';
import moxios from 'moxios';
import weatherClient from './client';
import {
	getCurrentWeather
} from './';

const MOCK_WEATHER_RESPONSE = {
	weather: [{
		description: 'clear sky'
	}],
	main:    {
		temp:     -6,
		humidity: 79
	},
	clouds: {
		all: 0
	},
	snow:   {
		'3h': 0.01
	},
	dt_txt: '2019-03-18 21:00:00'
};
const MOCK_FORECAST_RESPONSE = {
	list: [
		MOCK_WEATHER_RESPONSE,
		MOCK_WEATHER_RESPONSE
	]
};

describe('API', () => {

	beforeEach(() => {
		moxios.install(weatherClient);
	});

	afterEach(() => {
		moxios.uninstall(weatherClient);
	});

	describe('Weather Service', () => {

		describe('getCurrentWeather', () => {

			it('should get correct weather data', async () => {

				moxios.stubRequest(/\/weather/, {
					status:    200,
					response: MOCK_WEATHER_RESPONSE
				});

				moxios.stubRequest(/\/forecast/, {
					status:    200,
					response: MOCK_FORECAST_RESPONSE
				});

				const currentWeather = await getCurrentWeather('Novosibirsk');

				expect(typeof currentWeather.date).toBe('string');
				expect(typeof currentWeather.temp).toBe('number');
				expect(typeof currentWeather.description).toBe('string');
				expect(typeof currentWeather.humidity).toBe('number');
				expect(typeof currentWeather.clouds).toBe('number');
				expect(typeof currentWeather.precipitation).toBe('number');
			});
		});
	});
});
