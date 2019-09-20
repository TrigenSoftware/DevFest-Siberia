import axiosDefaults from 'axios/lib/defaults';
import Axios, {
	qs
} from '~/services/axios';
import {
	getToken
} from './';

export default Axios.create({
	baseURL:          process.env.API_URL,
	paramsSerializer: params => qs.stringify(params, { indices: false }),
	transformRequest: [
		...axiosDefaults.transformRequest,
		(data, headers) => {

			const authKey = getToken();

			headers['X-Auth-Key'] = authKey;
			return data;
		}
	]
});
