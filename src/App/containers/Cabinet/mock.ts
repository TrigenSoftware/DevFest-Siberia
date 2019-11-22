/* tslint:disable:no-magic-numbers */
import Store, {
	Connect,
	ImmutableAdapter
} from '@flexis/redux';
import {
	IActions,
	State
} from '~/store/types';
import {
	UserReducer
} from '~/store/User';
import {
	UserActions
} from '~/store/User/User.actions.mock';
import {
	mockAfterpartyOrder
} from '~/models/Order.mock';
import Cabinet from './Cabinet';
import {
	mapStateToProps,
	mapActionsToProps
} from './connected';

const {
	__REDUX_DEVTOOLS_EXTENSION__
} = global as any;

export default Connect({
	mapStateToProps,
	mapActionsToProps
})(Cabinet);

export const store = new Store<State, IActions>({
	adapter:  ImmutableAdapter,
	state:    State(),
	actions:  UserActions,
	reducer:  UserReducer,
	enhancer: __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
});

export const actions = {

	buyAfterpartyTicket() {

		const {
			orders
		} = store.state.user;
		const {
			user
		} = store.actions;
		const ordersWithAfterparty = orders.push(mockAfterpartyOrder());

		user.setOrders(ordersWithAfterparty);
	},

	generate() {

		const {
			user
		} = store.actions;

		user.setToken('token');
		user.fetchProfile();
		user.fetchOrders();
	}
};

actions.generate();
