import {
	List
} from 'immutable';
import createStore from '../';
import {
	WeatherSegment
} from './register';
import WeatherData from '~/models/WeatherData';

describe('Store', () => {

	describe('Weather Segment', () => {

		const store = createStore();

		beforeAll(() => {
			return store.loadSegment(WeatherSegment, true);
		});

		it('should set weather info', async () => {

			expect(store.state.weather.toJS()).toEqual({
				city:            null,
				currentWeather:  null,
				weatherForecast: []
			});

			store.actions.weather.setWeatherInfo({
				city:            'Moscow',
				currentWeather:  WeatherData(),
				weatherForecast: List()
			});

			expect(store.state.weather.toJS()).toEqual({
				city:            'Moscow',
				currentWeather:  WeatherData().toJS(),
				weatherForecast: []
			});
		});
	});
});
