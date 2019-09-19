/* tslint:disable:no-magic-numbers */
import Store, {
	Connect,
	ImmutableAdapter
} from '@flexis/redux';
import delay from 'delay';
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
import Header from './Header';
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
})(Header);

export const store = new Store<State, IActions>({
	adapter:  ImmutableAdapter,
	state:    State(),
	actions:  UserActions,
	reducer:  UserReducer,
	enhancer: __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
});

export const actions = {

	wrapForError(action: any) {
		return actions.showError
			? actions.setError
			: action;
	},

	logout() {

		const {
			user
		} = store.actions;

		user.logout();
	},

	async setError() {

		const {
			user
		} = store.actions;

		await delay(1000);

		user.setUser(null);
		user.setError({
			type:  actions.setError,
			error: new Error(actions.errorMessage)
		});
	},

	showError:    true,
	errorMessage: ''
};
