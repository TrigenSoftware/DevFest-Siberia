import {
	Connect
} from '@flexis/redux';
import {
	State,
	IActions
} from '~/store/types';
import {
	UserSegment
} from '~/store/segments';
import Loading from '~/components/Loading';
import CabinetContainer from './Cabinet';

function fetchOrders() {}

export function mapStateToProps({ user }: State) {
	return {
		user:   user.user,
		orders: user.orders
	};
}

export function mapActionsToProps({ user }: IActions) {
	return {
		fetchOrders,
		fetchProfile:                user.fetchProfile,
		selectTicketOrder:           user.selectTicketOrder,
		selectAfterpartyTicketOrder: user.selectAfterpartyTicketOrder,
		isLogged:                    user.isLogged
	};
}

export default Connect({
	dependsOn: UserSegment,
	loading:   Loading,
	mapStateToProps,
	mapActionsToProps
})(CabinetContainer);
