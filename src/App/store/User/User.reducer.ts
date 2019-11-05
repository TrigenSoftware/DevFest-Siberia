import {
	List
} from 'immutable';
import {
	Reducer
} from '@flexis/redux';
import User from '~/models/User';
import Order from '~/models/Order';
import Product from '~/models/Product';
import Favorite from '~/models/Favorite';
import Reservation from '~/models/Reservation';
import {
	UserState,
	ISetUserAction,
	ISetOrderAction,
	ISetProductAction,
	ISetFavoritesAction,
	ISetReservationsAction,
	ISetReservationAction,
	IRemoveReservationAction,
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

	setFavorites(state: UserState, { payload }: ISetFavoritesAction) {

		const favorites = payload && List(payload).map(Favorite);

		if (!favorites) {
			return state;
		}

		return state.set(
			'favorites',
			favorites
		);
	}

	setReservations(state: UserState, { payload }: ISetReservationsAction) {

		const reservations = payload && List(payload).map(Reservation);

		if (!reservations) {
			return state;
		}

		return state.set(
			'reservations',
			reservations
		);
	}

	setReservation(state: UserState, { payload }: ISetReservationAction) {

		const reservation = payload && Reservation(payload);

		return state.set(
			'reservations',
			state.reservations.push(reservation)
		);
	}

	removeReservation(state: UserState, { payload }: IRemoveReservationAction) {

		const {
			workshopId
		} = payload;
		const {
			reservations
		} = state;
		const reservationIndex = reservations.findIndex(_ => _.workshopId === workshopId);

		return state.set(
			'reservations',
			state.reservations.delete(reservationIndex)
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
