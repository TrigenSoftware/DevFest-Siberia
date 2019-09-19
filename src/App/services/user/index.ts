import createLogger from '~/services/logger';
import client from './client';
import {
	userFromResponseData,
	orderFromResponseData
} from './adapters';

const logger = createLogger('App::services::user');

export async function buy(registrationData) {

	logger.debug('buy', 'Input user:', registrationData);

	const {
		data: buyData
	} = await client.post('auth/register', {
		...registrationData
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

	saveToken(loginData.authKey);

	return userFromResponseData(loginData.profile);
}

export async function getProfile() {

	logger.debug('getProfile');

	const {
		data: profileData
	} = await client.get('api/profile');

	logger.debug('getProfile', 'Response:', profileData);

	return userFromResponseData(profileData);
}

export async function fetchOrders() {

	logger.debug('fetchOrders');

	const {
		data: ordersData
	} = await client.get('api/profile/orders');

	logger.debug('fetchOrders', 'Response:', ordersData);

	return orderFromResponseData(ordersData[0]);
}

export function logout() {

	logger.debug('logout');

	localStorage.removeItem('authToken');
}

export function saveToken(token: string) {
	localStorage.setItem('authToken', token);
}

export function getToken() {
	return localStorage.getItem('authToken');
}
