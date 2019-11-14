import {
	List
} from 'immutable';
import {
	Reducer
} from '@flexis/redux';
import Favorite from '~/models/Favorite';
import Reservation from '~/models/Reservation';
import {
	VariantScheduleItemType
} from '~/components/Schedule';
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

		const favoritesIds = favorites.map(favorite => favorite.lectureId);
		const schedule = state.schedule.map((item) => {

			if (item.type === VariantScheduleItemType.Talk) {

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

		const reservationsIds = reservations.map(reservation => reservation.workshopId);
		const schedule = state.schedule.map((item) => {

			if (item.type === VariantScheduleItemType.Workshop) {

				if (reservationsIds.includes(item.id)) {
					return {
						...item,
						workshop: true
					};
				}
				return {
					...item,
					workshop: false
				};
			}
			return item;
		});

		return state.merge({
			reservations,
			schedule
		});
	}
}
