import axios from 'axios/lib/defaults';
import Axios, {
	qs
} from '~/services/axios';
import {
	getToken
} from './';

const authKey = getToken();

export default Axios.create({
	baseURL:          process.env.HOST_URL,
	paramsSerializer: params => qs.stringify(params, { indices: false }),
	transformRequest: [
		...axios.transformRequest,
		(data, headers) => {
			headers['X-Auth-Key'] = authKey;
			return data;
		}
	]
});
