import createLogger from '~/services/logger';
import client from './client';
import {
	userFromResponseData,
	orderFromResponseData,
	productFromResponseData,
	favoritesFromResponseData,
	reservationsFromResponseData,
	reservationFromResponseData
} from './adapters';

const logger = createLogger('App::services::user');

export async function buy(registrationData) {

	logger.debug('buy', 'Input user:', registrationData);

	const {
		data: buyData
	} = await client.post('auth/register', registrationData);

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

	return orderFromResponseData(ordersData[0]);
}

export async function fetchProducts() {

	logger.debug('fetchProducts');

	const {
		data: productsData
	} = await client.get('api/product/all');

	logger.debug('fetchProducts', 'Response:', productsData);

	return productFromResponseData(productsData[0]);
}

export async function fetchFavorites() {

	logger.debug('fetchFavorites');

	const {
		data: favoritesData
	} = await client.get('api/favorites');

	logger.debug('fetchFavorites', 'Response:', favoritesData);

	return favoritesFromResponseData(favoritesData);
}

export async function addFavorite(lectureId: string) {

	logger.debug('addFavorite');

	const {
		data: favoritesData
	} = await client.put(`api/favorites/${lectureId}`);

	logger.debug('addFavorite', 'Response:', favoritesData);

	return favoritesFromResponseData(favoritesData);
}

export async function deleteFavorite(lectureId: string) {

	logger.debug('deleteFavorite');

	const {
		data: favoritesData
	} = await client.delete(`api/favorites/${lectureId}`);

	logger.debug('deleteFavorite', 'Response:', favoritesData);

	return favoritesFromResponseData(favoritesData);
}

export async function fetchReservations() {

	logger.debug('fetchReservation');

	const {
		data: reservationsData
	} = await client.get('api/reservation/all');

	logger.debug('fetchReservation', 'Response:', reservationsData);

	return reservationsFromResponseData(reservationsData);
}

export async function addReservation(workshopId: string) {

	logger.debug('addReservation');

	const {
		data: addedReservation
	} = await client.put(`api/reservation/${workshopId}`);

	logger.debug('addedReservation', 'Response:', addedReservation);

	return reservationFromResponseData(addedReservation);
}

export async function deleteReservation(workshopId: string) {

	logger.debug('deleteReservation');

	const {
		data: deletedReservation
	} = await client.delete(`api/reservation/${workshopId}`);

	logger.debug('deleteReservation', 'Response:', deletedReservation);

	return reservationFromResponseData(deletedReservation);
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
