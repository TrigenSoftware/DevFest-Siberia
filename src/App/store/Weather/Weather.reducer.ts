import {
	Reducer
} from '@flexis/redux';
import {
	WeatherState,
	ISetWeatherInfoAction
} from './Weather.types';

export class WeatherReducer extends Reducer {

	static namespace = 'weather';

	setWeatherInfo(state: WeatherState, { payload }: ISetWeatherInfoAction) {
		return state.merge(WeatherState(payload));
	}
}
