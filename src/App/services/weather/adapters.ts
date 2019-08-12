import {
	format
} from 'date-fns';
import {
	parseFromTimeZone
} from 'date-fns-timezone';
import WeatherData from '~/models/WeatherData';

export function weatherDataFromResponseData(responseData) {
	return WeatherData({
		date:          formatDate(responseData.dt_txt),
		temp:          Math.round(responseData.main.temp),
		description:   responseData.weather[0].description,
		humidity:      responseData.main.humidity,
		clouds:        responseData.clouds
			? responseData.clouds.all
			: 0,
		precipitation: responseData.rain && responseData.rain['3h']
			? responseData.rain['3h']
			: (responseData.snow && responseData.snow['3h']
				? responseData.snow['3h']
				: 0)
	});
}

function formatDate(utcDateString: string) {

	if (!utcDateString) {
		return '';
	}

	const date = parseFromTimeZone(utcDateString, 'YYYY-MM-DD HH:mm:ss', {
		timeZone: 'Etc/UTC'
	});

	return format(date, 'dd.MM.yyyy');
}
