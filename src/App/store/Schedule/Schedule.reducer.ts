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
	ISetReservationsAction
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

		return state.set(
			'favorites',
			favorites
		);
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
}
