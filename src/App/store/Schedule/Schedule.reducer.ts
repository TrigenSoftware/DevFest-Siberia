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

		const schedule = state.schedule.map((item) => {

			if (item.type === VariantScheduleItemType.Talk) {

				if (favorites.some(_ => _.lectureId === item.id)) {
					item.favorite = true;
					return item;
				}

				item.favorite = false;
				return item;
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

		const schedule = state.schedule.map((item) => {

			if (item.type === VariantScheduleItemType.Workshop) {

				if (reservations.some(_ => _.workshopId === item.id && _.status === 'reserved')) {
					item.workshop = true;
					return item;
				}

				item.workshop = false;
				return item;
			}
			return item;
		});

		return state.merge({
			reservations,
			schedule
		});
	}
}
