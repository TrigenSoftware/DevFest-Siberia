import User from '~/models/User';
import Order from '~/models/Order';

export function loginDataFromResponseData(responseData) {
	return User({
		userId:    responseData.userId,
		email:     responseData.email,
		firstname: responseData.firstName,
		lastname:  responseData.lastName,
		company:   responseData.company,
		city:      responseData.city
	});
}

export function fetchOrderDataFromResponseData(responseData) {
	return Order({
		status: responseData.status,
		paymentLink: responseData.paymentLink,
		items: responseData.items
	});
}
