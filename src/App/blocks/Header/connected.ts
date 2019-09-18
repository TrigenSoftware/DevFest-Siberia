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
import Header from './Header';

export function mapStateToProps({ user }: State) {
	return {
		user:   user.user,
		errors: user.errors
	};
}

export function mapActionsToProps({ user }: IActions) {
	return {
		login:       user.login,
		clearErrors: user.clearErrors
	};
}

export default Connect({
	dependsOn: UserSegment,
	loading:   Loading,
	mapStateToProps,
	mapActionsToProps
})(Header);
