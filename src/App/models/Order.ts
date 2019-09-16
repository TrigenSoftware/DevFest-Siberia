import {
	Record,
	List
} from 'immutable';
import OrderItem from './OrderItem';

export interface IOrderProps {
	status: string;
	paymentLink: string;
	items: List<OrderItem>;
}

type Order = ReturnType<Record.Factory<IOrderProps>>;

const Order = Record<IOrderProps>({
	status:      '',
	paymentLink: '',
	items:       List()
});

export default Order;
