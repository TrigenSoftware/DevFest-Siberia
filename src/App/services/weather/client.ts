import Axios, {
	qs
} from '../axios';

export default Axios.create({
	baseURL:          'https://api.openweathermap.org/data/2.5/',
	paramsSerializer: params => qs.stringify({
		APPID: process.env.OPENWEATHER_APPID,
		lang:  'en',
		units: 'metric',
		mode:  'json',
		...params
	}, { indices: false })
});
