import * as userService from '~/services/user/mock';
import {
	IActions,
	State
} from '../types';
import {
	SetUserPayload,
	SetOrdersPayload,
	SetProductPayload,
	SetUserErrorPayload,
	UserState
} from './User.types';
import {
	UserReducer
} from './User.reducer';

export abstract class UserActions extends UserReducer.Actions<UserState, State, IActions> {

	private logged = false;

	async buy(registrationData) {

		const redirectUrl = await userService.buy(registrationData);

		window.location.href = redirectUrl;
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

			const orders = await userService.fetchOrders();

			this.setOrders(orders);

		} catch (error) {
			this.setError({
				type: this.fetchOrders,
				error
			});
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
		}
	}

	async setToken(_: string) {

		try {

			this.logged = true;

			const profile = await userService.fetchProfile();

			this.setUser(profile);

		} catch (error) {
			this.setError({
				type: this.setToken,
				error
			});
		}
	}

	selectTicketOrder(orders: any[]): any {
		return orders.find(order => order.items.some(item => item.productId !== 'afterparty'));
	}

	selectAfterpartyTicketOrder(orders: any[]): any {
		return orders.find(order => order.items.some(item => item.productId === 'afterparty'));
	}

	isLogged() {
		return this.logged;
	}

	logout() {

		this.logged = false;

		location.reload();
	}

	abstract setUser(payload: SetUserPayload);
	abstract setOrders(payload: SetOrdersPayload);
	abstract setProduct(payload: SetProductPayload);
	abstract setError(payload: SetUserErrorPayload);
	abstract clearErrors();
}
