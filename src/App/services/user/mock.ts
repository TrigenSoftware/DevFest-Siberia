/* tslint:disable:no-magic-numbers */
import delay from 'delay';
import createLogger from '~/services/logger';
import User from '~/models/User';
import Product from '~/models/Product';
import mockUser from '~/models/User.mock';
import mockOrders from '~/models/Order.mock';
import mockProduct from '~/models/Product.mock';

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

	return User(response.profile);
}

export async function fetchOrders() {

	logger.debug('fetchOrders');

	const response = mockOrders();

	logger.debug('fetchOrders', 'Response:', response);

	return response;
}

export async function fetchProfile() {

	logger.debug('fetchProfile');

	const response = mockUser();

	logger.debug('fetchProfile', 'Response:', response);

	return User(response.profile);
}

export async function fetchProducts() {

	logger.debug('fetchProducts');

	const response = mockProduct();

	logger.debug('fetchProducts', 'Response:', response);

	return Product(response);
}

export function logout() {
	logger.debug('logout');
}
