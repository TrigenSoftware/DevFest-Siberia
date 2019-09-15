import {
	Record
} from 'immutable';

export interface IOrderProps {
	status: string;
	paymentLink: string;
	items: any[];
}

type Order = ReturnType<Record.Factory<IOrderProps>>;

const Order = Record<IOrderProps>({
	status:      null,
	paymentLink: null,
	items:       null
});

export default Order;
