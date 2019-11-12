/* tslint:disable:no-magic-numbers */
import * as scheduleService from '~/services/schedule';
import * as scheduleServiceMock from '~/services/schedule/mock';
import Favorite from '~/models/Favorite';
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

	async addFavorite(lectureId: string) {

		const {
			favorites
		} = this.state;
		const addedFavorite = Favorite({
			lectureId
		});
		const updatedFavorites = favorites.push(addedFavorite);

		this.setFavorites(updatedFavorites);
	}

	async deleteFavorite(lectureId: string) {

		const {
			favorites
		} = this.state;
		const favoriteIndex = favorites.findIndex(_ => _.lectureId === lectureId);
		const updatedFavorites = favorites.delete(favoriteIndex);

		this.setFavorites(updatedFavorites);
	}

	async fetchReservations() {

		const reservations = await scheduleServiceMock.fetchReservations();

		this.setReservations(reservations);
	}

	async addReservation() {
		console.log('addReservation');
	}

	async deleteReservation() {
		console.log('deleteReservation');
	}

	abstract setSchedule(payload: SetSchedulePayload);
	abstract setFavorites(payload: SetFavoritesPayload);
	abstract setReservations(payload: SetReservationsPayload);
	abstract setReservation(payload: SetReservationPayload);
	abstract removeReservation(payload: RemoveReservationPayload);
}
