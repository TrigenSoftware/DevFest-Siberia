/* tslint:disable no-magic-numbers */
import {
	List
} from 'immutable';
import faker from 'faker';
import Order from './Order';
import Orderitem from './OrderItem';
import Ticket from './Ticket';

const count = 3;

export function mockTicket() {
	return Ticket({
		ticketUID: 'ticket'
	});
}

export function mockIOrderItem() {
	return Orderitem({
		productRef:         faker.lorem.word(),
		productName:        faker.lorem.word(),
		productDescription: faker.lorem.word(),
		price:              faker.random.number(),
		originalPrice:      faker.random.number(),
		promocode:          faker.lorem.word(),
		ticket:             mockTicket()
	});
}

export function mockListOrderItems() {
	return List([mockIOrderItem()]);
}

export function mockOrder() {
	return Order({
		status:      faker.lorem.word(),
		paymentLink: faker.lorem.word(),
		items:       mockListOrderItems()
	});
}

export default function mockFavorites() {
	return List(Array.from({ length: count }).map(mockOrder));
}
