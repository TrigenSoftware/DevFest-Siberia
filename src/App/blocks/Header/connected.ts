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
import {
	IActionsProps
} from './types';
import Header from './Header';

export function mapStateToProps({ user }: State) {
	return {
		user:   user.user,
		errors: user.errors
	};
}

export function mapActionsToProps({ user }: IActions): IActionsProps {

	if (!user) {
		return {
			actionsReady: false
		};
	}

	return {
		actionsReady: true,
		login:        user.login,
		logout:       user.logout,
		setToken:     user.setToken,
		isLogged:     user.isLogged,
		clearErrors:  user.clearErrors
	};
}

export default Connect({
	dependsOn:   UserSegment,
	skipWaiting: true,
	mapStateToProps,
	mapActionsToProps
})(Header);
