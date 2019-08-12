import Axios, {
	CancelTokenSource
} from 'axios';
import qs from 'qs';

export {
	Axios as default,
	qs
};

const {
	CancelToken
} = Axios;

Axios.defaults.responseType = 'json';

const cancelTokens = new Map<any, CancelTokenSource>();

export function getCancelToken(key: any) {

	if (cancelTokens.has(key)) {
		cancelTokens.get(key).cancel();
	}

	const source = CancelToken.source();

	cancelTokens.set(key, source);

	return source.token;
}
