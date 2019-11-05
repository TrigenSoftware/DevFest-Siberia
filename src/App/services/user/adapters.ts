import {
	List
} from 'immutable';
import User from '~/models/User';
import Order from '~/models/Order';
import Product from '~/models/Product';
import Favorite from '~/models/Favorite';
import Reservation from '~/models/Reservation';

export function userFromResponseData(responseData) {
	return User({
		userId:    responseData.userId,
		email:     responseData.email,
		firstname: responseData.firstName,
		lastname:  responseData.lastName,
		company:   responseData.company,
		city:      responseData.city
	});
}

export function orderFromResponseData(responseData) {
	return Order({
		status:      responseData.status,
		paymentLink: responseData.paymentLink,
		items:       responseData.items
	});
}

export function productFromResponseData(responseData) {
	return Product({
		ref:         responseData.ref,
		price:       responseData.price,
		currency:    responseData.currency,
		name:        responseData.name,
		description: responseData.description
	});
}

export function reservationFromResponseData(responseData) {
	return Reservation({
		workshopId: responseData.workshopId,
		status:     responseData.status
	});
}

export function favoritesFromResponseData(responseData) {
	return List(responseData).map(Favorite);
}

export function reservationsFromResponseData(responseData) {
	return List(responseData).map(Reservation);
}
