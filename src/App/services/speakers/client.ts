
import Axios from '~/services/axios';

export default Axios.create({
	baseURL: '/',
	headers: { 'Cache-Control': 'no-cache' }
});
