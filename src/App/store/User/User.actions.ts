import * as userService from '~/services/user';
import {
	IActions,
	State
} from '../types';
import {
	SetUserPayload,
	SetOrderPayload,
	SetUserErrorPayload,
	UserState
} from './User.types';
import {
	UserReducer
} from './User.reducer';

export abstract class UserActions extends UserReducer.Actions<UserState, State, IActions> {

	async buy(registrationData) {

		const redirectUrl = await userService.buy(registrationData);

		if (redirectUrl === `${process.env.API_URL}buy?login=true`) {
			this.setError({
				type:  this.buy,
				error: new Error('User already exist')
			});
		} else {
			this.clearErrors();
			window.location.href = redirectUrl;
		}
	}

	async login(email: string, password: string) {

		try {

			const user = await userService.login(email, password);

			this.setUser(user);

			return true;

		} catch (error) {
			this.setUser(null);
			this.setError({
				type: this.login,
				error
			});

			return false;
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

	async getProfile() {

		try {

			const profile = await userService.getProfile();

			this.setUser(profile);

		} catch (error) {
			this.setError({
				type: this.getProfile,
				error
			});
		}
	}

	isLogged() {

		const token = userService.getToken();

		if (token) {
			return true;
		}

		return false;
	}

	logout() {

		userService.logout();

		location.reload();
	}

	abstract setUser(payload: SetUserPayload);
	abstract setOrder(payload: SetOrderPayload);
	abstract setError(payload: SetUserErrorPayload);
	abstract clearErrors();
}
