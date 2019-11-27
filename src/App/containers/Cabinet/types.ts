import {
	List
} from 'immutable';
import {
	RouteComponentProps
} from 'react-router-dom';
import {
	IUserStateProps
} from '~/store/types';
import Order from '~/models/Order';
import OrderItem from '~/models/OrderItem';
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IProps extends ISectionProps, IUserStateProps, RouteComponentProps {
	fetchOrders();
	fetchProfile();
	buyAfterpartyTicket(locale: string);
	selectTicketOrder(orders: List<Order>): OrderItem;
	selectAfterpartyTicketOrder(orders: List<Order>): OrderItem;
	isLogged();
}
