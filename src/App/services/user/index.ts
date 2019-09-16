import createLogger from '~/services/logger';
import client from './client';
import {

	loginDataFromResponseData,
	fetchOrderDataFromResponseData
} from './adapters';

const logger = createLogger('App::services::user');

export async function buy(registrationData) {

	logger.debug('buy', 'Input user:', registrationData);

	const {
		data: buyData
	} = await client.post('auth/register', {
		registrationData
	});

	logger.debug('buy', 'Response:', buyData);

	return buyData.paymentDetails.redirectUrl;
}

export async function login(email: string, password: string) {

	logger.debug('login', 'Input email:', email);

	const {
		data: loginData
	} = await client.post('auth/login', {
		email,
		password
	});

	logger.debug('login', 'Response:', loginData);

	return loginDataFromResponseData(loginData);
}

export async function fetchOrders() {

	logger.debug('fetchOrders');

	const {
		data: ordersData
	} = await client.get('api/profile/orders');

	logger.debug('fetchOrders', 'Response:', ordersData);

	return fetchOrderDataFromResponseData(ordersData);
}

export function saveToken(token: string) {
	localStorage.setItem('authToken', token);
}

export function getToken() {
	return localStorage.getItem('authToken');
}
