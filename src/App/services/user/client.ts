import Axios, {
	qs
} from '~/services/axios';

export default Axios.create({
	baseURL:          'https://yoba.gdg-siberia.com',
	paramsSerializer: params => qs.stringify(params, { indices: false })
});
