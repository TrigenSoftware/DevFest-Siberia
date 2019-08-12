import {
	Record
} from 'immutable';

export interface IWeatherDataProps {
	date: string;
	temp: number;
	description: string;
	humidity: number;
	clouds: number;
	precipitation: number;
}

type WeatherData = ReturnType<Record.Factory<IWeatherDataProps>>;

const WeatherData = Record<IWeatherDataProps>({
	date:          null,
	temp:          null,
	description:   null,
	humidity:      null,
	clouds:        null,
	precipitation: null
});

export default WeatherData;
