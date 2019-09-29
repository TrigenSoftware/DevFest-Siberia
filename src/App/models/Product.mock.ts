import Product from './Product';

export default function mockProduct() {
	return Product({
		ref:         'ticket',
		price:       4000,
		currency:    'RUB',
		name:        'Ticket',
		description: 'Ticket'
	});
}
