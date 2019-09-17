import {
	Reducer
} from '@flexis/redux';
import User from '~/models/User';
import Order from '~/models/Order';
import {
	UserState,
	ISetUserAction,
	ISetOrderAction,
	ISetRedirectUrlAction,
	ISetUserErrorAction
} from './User.types';

export class UserReducer extends Reducer {

	static namespace = 'user';

	setUser(state: UserState, { payload }: ISetUserAction) {

		const user = payload && User(payload);

		return state.set(
			'user',
			user
		);
	}

	setOrder(state: UserState, { payload }: ISetOrderAction) {

		const order = payload && Order(payload);

		return state.set(
			'order',
			order
		);
	}

	setRedirectUrl(state: UserState, { payload }: ISetRedirectUrlAction) {

		return state.set(
			'redirectUrl',
			payload
		);
	}

	setError(state: UserState, { payload }: ISetUserErrorAction) {

		const {
			type,
			error
		} = payload;
		const {
			errors
		} = state;

		return state.set(
			'errors',
			errors.set(type, error)
		);
	}
}
