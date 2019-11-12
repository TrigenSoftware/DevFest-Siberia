/* tslint:disable:no-magic-numbers */
import * as scheduleService from '~/services/schedule';
import * as scheduleServiceMock from '~/services/schedule/mock';
import {
	IActions,
	State
} from '../types';
import {
	SetSchedulePayload,
	ScheduleState,
	SetFavoritesPayload,
	SetReservationsPayload,
	SetReservationPayload,
	RemoveReservationPayload
} from './Schedule.types';
import {
	ScheduleReducer
} from './Schedule.reducer';

export const AllScheduleType = 'all';

export abstract class ScheduleActions extends ScheduleReducer.Actions<ScheduleState, State, IActions> {

	selectScheduleByType(date: string, type: string) {

		const {
			schedule
		} = this.state;
		const filtredByDate = schedule.filter(item => item.date === date);

		if (type && type !== AllScheduleType) {

			switch (type) {

				case 'beginner':
				case 'intermediate':
				case 'advanced':
					return filtredByDate.filter(
						item => item.talkLevelBadge && item.talkLevelBadge.toLowerCase() === type
					);

				default:
					return filtredByDate.filter(
						item => item.talkTypeBadge && item.talkTypeBadge.toLowerCase() === type
					);
			}
		}

		return filtredByDate;
	}

	async fetchSchedule() {

		const schedule = await scheduleService.fetch();

		this.setSchedule(schedule);
	}

	async fetchFavorites() {

		const favorites = await scheduleServiceMock.fetchFavorites();

		this.setFavorites(favorites);
	}

	abstract setSchedule(payload: SetSchedulePayload);
	abstract setFavorites(payload: SetFavoritesPayload);
	abstract setReservations(payload: SetReservationsPayload);
	abstract setReservation(payload: SetReservationPayload);
	abstract removeReservation(payload: RemoveReservationPayload);
}
