import Store from '@flexis/redux';
import {
	IActions
} from '../types';
import CITIES from '../cities';

export const WeatherSegment = Symbol('weather');

async function loadWeatherSegmentConfig() {

	const {
		WeatherReducer,
		WeatherActions
	} = await import('./');

	return {
		reducer: WeatherReducer,
		actions: WeatherActions
	};
}

async function loadInitialWeatherData(store: Store<any, IActions>) {
	await store.actions.weather.loadWeatherInfo(CITIES[0]);
}

export function registerWeatherSegment(store: Store) {
	store.registerSegment(
		WeatherSegment,
		loadWeatherSegmentConfig,
		loadInitialWeatherData
	);
}
