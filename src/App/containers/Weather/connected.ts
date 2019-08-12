import {
	Connect
} from '@flexis/redux';
import {
	IWeatherStateProps,
	State,
	IActions
} from '~/store/types';
import {
	WeatherSegment
} from '~/store/segments';
import Loading from '~/components/Loading';
import {
	WatherContainer
} from './Weather';

function mapStateToProps({ weather }: State): IWeatherStateProps {
	return {
		city:            weather.city,
		currentWeather:  weather.currentWeather,
		weatherForecast: weather.weatherForecast
	};
}

function mapActionsToProps({ weather }: IActions) {
	return {
		loadWeatherInfo: weather.loadWeatherInfo
	};
}

export default Connect({
	dependsOn: WeatherSegment,
	loading:   Loading,
	mapStateToProps,
	mapActionsToProps
})(WatherContainer);
