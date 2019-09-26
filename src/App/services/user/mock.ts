/* tslint:disable:no-magic-numbers */
import delay from 'delay';
import createLogger from '~/services/logger';
import {
	saveToken
} from '~/services/user';
import User from '~/models/User';
import Order from '~/models/Order';
import mockUser from '~/models/User.mock';
import mockOrders from '~/models/Order.mock';

const logger = createLogger('App::services::user');

export async function buy(registrationData) {

	logger.debug('buy', 'Input user:', registrationData);

	if (!process.env.SEED) {
		await delay(1000);
	}

	return '/';
}

export async function login(email: string, password: string) {

	logger.debug('login', 'Input email:', email, '; password:', password);

	if (!process.env.SEED) {
		await delay(1000);
	}

	const response = mockUser();

	logger.debug('login', 'Response:', response);

	saveToken(response.authKey);

	return User(response.profile);
}

export async function fetchOrders() {

	logger.debug('fetchOrders');

	const response = mockOrders();

	logger.debug('fetchOrders', 'Response:', response);

	return Order(response);
}

export async function getProfile() {

	logger.debug('getProfile');

	const response = mockUser();

	logger.debug('getProfile', 'Response:', response);

	return User(response.profile);
}

export function logout() {

	logger.debug('logout');

	localStorage.removeItem('authToken');
}
