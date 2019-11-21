import createLogger from '~/services/logger';
import client from './client';
import {
	userFromResponseData,
	ordersFromResponseData,
	productFromResponseData
} from './adapters';

const logger = createLogger('App::services::user');

export async function buy({
	locale,
	promocode,
	...registrationData
}) {

	logger.debug('buy', 'Input user:', registrationData);

	const {
		data: buyData
	} = await client.post('auth/register', {
		termsAccepted:  true,
		paymentRequest: {
			locale,
			products: [{
				productRef: 'ticket'
			}],
			promocode: promocode.toLocaleLowerCase()
		},
		...registrationData
	});

	logger.debug('buy', 'Response:', buyData);

	const {
		paymentDetails: {
			redirectUrl
		}
	} = buyData;

	if (!redirectUrl) {
		throw Error('Invalid input data');
	}

	if (redirectUrl.startsWith(process.env.API_URL.replace(/\/$/, ''))) {
		throw Error('User already exist');
	}

	return redirectUrl;
}

export async function buyAfterpartyTicket(locale: string) {

	logger.debug('buyAfterpartyTicket');

	const profile = await fetchProfile();

	logger.debug('buyAfterpartyTicket', 'Response:', profile);

	const {
		data: buyAfterpartyData
	} = await client.post('auth/register', {
		termsAccepted:  true,
		paymentRequest: {
			locale,
			products: [{
				productRef: 'afterparty'
			}],
			promocode: ''
		},
		...profile.toJS()
	});

	logger.debug('buyAfterpartyTicket', 'Response:', buyAfterpartyData);

	const {
		paymentDetails: {
			redirectUrl
		}
	} = buyAfterpartyData;

	return redirectUrl;
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

export async function fetchProfile() {

	logger.debug('fetchProfile');

	const {
		data: profileData
	} = await client.get('api/profile');

	logger.debug('fetchProfile', 'Response:', profileData);

	return userFromResponseData(profileData);
}

export async function fetchOrders() {

	logger.debug('fetchOrders');

	const {
		data: ordersData
	} = await client.get('api/profile/orders');

	logger.debug('fetchOrders', 'Response:', ordersData);

	return ordersFromResponseData(ordersData);
}

export async function fetchProducts() {

	logger.debug('fetchProducts');

	const {
		data: productsData
	} = await client.get('api/product/all');

	logger.debug('fetchProducts', 'Response:', productsData);

	return productFromResponseData(productsData[0]);
}

export function logout() {

	logger.debug('logout');

	if (typeof localStorage !== 'undefined') {
		clearToken();
	}
}

export function saveToken(token: string) {

	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('authToken', token);
	}
}

export function getToken() {

	if (typeof localStorage === 'undefined') {
		return null;
	}

	return localStorage.getItem('authToken');
}

export function clearToken() {
	localStorage.removeItem('authToken');
}
