import User from '~/models/User';
import Order from '~/models/Order';
import Product from '~/models/Product';

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
