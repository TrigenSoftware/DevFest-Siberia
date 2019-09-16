import createLogger from '~/services/logger';
import client from './client';
import {
	loginDataFromResponseData
} from './adapters';

const logger = createLogger('App::services::user');

export async function buy(registrationData) {

	logger.debug('buy', 'Input user:', registrationData);

	const response = await client.post('auth/register', {
		registrationData
	});

	logger.debug('buy', 'Response:', response);

	return response.data;
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

export async function fetchOrders(userId: number) {

	logger.debug('fetchOrders', 'Input id:', userId);

	const {
		data: ordersData
	} = await client.get(`api/${userId}/orders`);

	logger.debug('fetchOrders', 'Response:', ordersData);

	return ordersData;
}

export function saveToken(token: string) {
	localStorage.setItem('authToken', token);
}

export function getToken() {
	return localStorage.getItem('authToken');
}
