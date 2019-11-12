import {
	List
} from 'immutable';
import {
	Reducer
} from '@flexis/redux';
import Favorite from '~/models/Favorite';
import Reservation from '~/models/Reservation';
import {
	ScheduleState,
	ISetScheduleAction,
	ISetFavoritesAction,
	ISetReservationsAction,
	ISetReservationAction,
	IRemoveReservationAction
} from './Schedule.types';

export class ScheduleReducer extends Reducer {

	static namespace = 'schedule';

	setSchedule(state: ScheduleState, { payload }: ISetScheduleAction) {
		return state.set(
			'schedule',
			payload
		);
	}

	setFavorites(state: ScheduleState, { payload }: ISetFavoritesAction) {

		const favorites = payload && List(payload).map(Favorite);

		if (!favorites) {
			return state;
		}

		const favoritesIds = favorites.map(favorite => favorite.lectureId);
		const schedule = state.schedule.map((item) => {

			if (item.type === 'talk') {
				if (favoritesIds.includes(item.id)) {
					return {
						...item,
						favorite: true
					};
				}
				return {
					...item,
					favorite: false
				};
			}
			return item;
		});

		return state.merge({
			favorites,
			schedule
		});
	}

	setReservations(state: ScheduleState, { payload }: ISetReservationsAction) {

		const reservations = payload && List(payload).map(Reservation);

		if (!reservations) {
			return state;
		}

		return state.set(
			'reservations',
			reservations
		);
	}

	setReservation(state: ScheduleState, { payload }: ISetReservationAction) {

		const reservation = payload && Reservation(payload);

		return state.set(
			'reservations',
			state.reservations.push(reservation)
		);
	}

	removeReservation(state: ScheduleState, { payload }: IRemoveReservationAction) {

		const {
			workshopId
		} = payload;
		const {
			reservations
		} = state;
		const reservationIndex = reservations.findIndex(_ => _.workshopId === workshopId);

		if (!~reservationIndex) {
			return state;
		}

		return state.set(
			'reservations',
			state.reservations.delete(reservationIndex)
		);
	}
}
