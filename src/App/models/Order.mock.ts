import {
	List
} from 'immutable';
import faker from 'faker';
import Order from './Order';
import Orderitem from './OrderItem';
import Ticket from './Ticket';

export function mockTicket() {
	return Ticket({
		ticketUID: 'ticket'
	});
}

export function mockIOrderItem() {
	return Orderitem({
		productId:          'ticket',
		productName:        faker.lorem.word(),
		productDescription: faker.lorem.word(),
		price:              faker.random.number(),
		originalPrice:      faker.random.number(),
		promocode:          faker.lorem.word(),
		ticket:             mockTicket()
	});
}

export function mockIOrderAftrepartyItem() {
	return Orderitem({
		productId:          'afterparty',
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

export function mockAfterpartyOrder() {
	return Order({
		status:      faker.lorem.word(),
		paymentLink: faker.lorem.word(),
		items:       List([mockIOrderAftrepartyItem()])
	});
}

export function mockAfterpartyOrders() {
	return List([mockOrder(), mockAfterpartyOrder()]);
}

export default function mockOrders() {
	return List([mockOrder()]);
}
