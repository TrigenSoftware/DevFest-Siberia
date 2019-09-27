import {
	Reducer
} from '@flexis/redux';
import User from '~/models/User';
import Order from '~/models/Order';
import Product from '~/models/Product';
import {
	UserState,
	ISetUserAction,
	ISetOrderAction,
	ISetProductAction,
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

	setProduct(state: UserState, { payload }: ISetProductAction) {

		const product = payload && Product(payload);

		return state.set(
			'product',
			product
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

	clearErrors(state: UserState) {

		const {
			errors
		} = state;

		return state.set(
			'errors',
			errors.clear()
		);
	}
}
