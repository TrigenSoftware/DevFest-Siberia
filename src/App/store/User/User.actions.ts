import * as userService from '~/services/user';
import {
	IActions,
	State
} from '../types';
import {
	SetUserPayload,
	SetOrderPayload,
	SetRedirectUrlPayload,
	SetUserErrorPayload,
	UserState
} from './User.types';
import {
	UserReducer
} from './User.reducer';

export abstract class UserActions extends UserReducer.Actions<UserState, State, IActions> {

	async buy(registrationData) {

		try {

			const redirectUrl = await userService.buy(registrationData);

			this.setRedirectUrl(redirectUrl);

		} catch (error) {
			this.setError({
				type: this.buy,
				error
			});
		}
	}

	async login(email: string, password: string) {

		try {

			const user = await userService.login(email, password);

			this.setUser(user);

		} catch (error) {
			this.setUser(null);
			this.setError({
				type: this.login,
				error
			});
		}
	}

	async fetchOrders() {

		try {
			const order = await userService.fetchOrders();

			this.setOrder(order);

		} catch (error) {
			this.setError({
				type: this.fetchOrders,
				error
			});
		}
	}

	abstract setUser(payload: SetUserPayload);
	abstract setOrder(payload: SetOrderPayload);
	abstract setRedirectUrl(payload: SetRedirectUrlPayload);
	abstract setError(payload: SetUserErrorPayload);
}
