import {
	Connect
} from '@flexis/redux';
import {
	IActions,
	State
} from '~/store/types';
import {
	UserSegment
} from '~/store/segments';
import Loading from '~/components/Loading';
import BuyContainer from './Buy';

export function mapStateToProps({ user }: State) {
	return {
		errors: user.errors
	};
}

export function mapActionsToProps({ user }: IActions) {
	return {
		buy: user.buy
	};
}

export default Connect({
	dependsOn: UserSegment,
	loading:   Loading,
	mapStateToProps,
	mapActionsToProps
})(BuyContainer);
