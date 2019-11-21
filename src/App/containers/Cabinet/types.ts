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
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IProps extends ISectionProps, IUserStateProps, RouteComponentProps {
	fetchOrders();
	fetchProfile();
	selectTicketOrder(orders: List<Order>);
	selectAfterpartyTicketOrder(orders: List<Order>);
	isLogged();
}
