/* tslint:disable:no-magic-numbers */
import * as userService from '~/services/user';
import {
	IActions,
	State
} from '../types';
import {
	SetUserPayload,
	SetOrderPayload,
	SetProductPayload,
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

			this.clearErrors();
			location.href = redirectUrl;

		} catch (error) {
			this.setError({
				type: this.buy,
				error
			});
		}
	}

	async buyAfterpartyTicket() {

		try {

			const redirectUrl = await userService.buyAfterpartyTicket();

			this.clearErrors();
			location.href = redirectUrl;

		} catch (error) {
			this.setError({
				type: this.buyAfterpartyTicket,
				error
			});
		}
	}

	async hasAfterpartyTicket() {

		try {

			const response = await userService.hasAfterpartyTicket();

			return response;

		} catch (error) {
			this.setError({
				type: this.hasAfterpartyTicket,
				error
			});

			if (error.response.data.code === 401) {
				this.refreshToken();
			}
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

			if (error.response.data.code === 401) {
				this.refreshToken();
			}
		}
	}

	async fetchProfile() {

		try {

			const profile = await userService.fetchProfile();

			this.setUser(profile);

		} catch (error) {
			this.setError({
				type: this.fetchProfile,
				error
			});

			if (error.response.data.code === 401) {
				this.refreshToken();
			}
		}
	}

	async fetchProducts() {

		try {

			const product = await userService.fetchProducts();

			this.setProduct(product);

		} catch (error) {
			this.setError({
				type: this.fetchProducts,
				error
			});

			if (error.response.data.code === 401) {
				this.refreshToken();
			}
		}
	}

	async setToken(token: string) {

		try {

			userService.saveToken(token);

			const profile = await userService.fetchProfile();

			this.setUser(profile);

		} catch (error) {
			this.setError({
				type: this.setToken,
				error
			});
		}
	}

	refreshToken() {
		userService.clearToken();
		location.href = '/?login=true';
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
	abstract setProduct(payload: SetProductPayload);
	abstract setError(payload: SetUserErrorPayload);
	abstract clearErrors();
}
