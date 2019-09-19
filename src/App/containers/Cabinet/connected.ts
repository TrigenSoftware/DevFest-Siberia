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

export function mapStateToProps({ user }: State) {
	return {
		user: user.user,
		order: user.order
	};
}

export function mapActionsToProps({ user }: IActions) {
	return {
		fetchOrders: user.fetchOrders,
		getProfile:  user.getProfile,
		isLogged:    user.isLogged
	};
}

export default Connect({
	dependsOn: UserSegment,
	loading:   Loading,
	mapStateToProps,
	mapActionsToProps
})(CabinetContainer);
