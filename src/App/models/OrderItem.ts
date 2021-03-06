import {
	Record
} from 'immutable';
import Ticket from './Ticket';

export interface IOrderItemProps {
	productId: string;
	productName: string;
	productDescription: string;
	price: number;
	originalPrice: number;
	promocode: string;
	ticket: Ticket;
}

type OrderItem = ReturnType<Record.Factory<IOrderItemProps>>;

const OrderItem = Record<IOrderItemProps>({
	productId:          '',
	productName:        '',
	productDescription: '',
	price:              -1,
	originalPrice:      -1,
	promocode:          '',
	ticket:             Ticket()
});

export default OrderItem;
