/* tslint:disable:no-magic-numbers */
import * as scheduleService from '~/services/schedule';
import * as userService from '~/services/user';
import {
	IActions,
	State
} from '../types';
import {
	SetSchedulePayload,
	ScheduleState,
	SetFavoritesPayload,
	SetReservationsPayload
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

	async fetchSchedule(lang?: string) {

		const schedule = await scheduleService.fetch({
			lang
		});

		this.setSchedule(schedule);
	}

	async fetchFavorites() {

		try {

			const favorites = await scheduleService.fetchFavorites();

			this.setFavorites(favorites);

		} catch (error) {
			this.checkToken(error);
		}
	}

	async addFavorite(lectureId: string) {

		try {

			const favorites = await scheduleService.addFavorite(lectureId);

			this.setFavorites(favorites);

		} catch (error) {
			this.checkToken(error);
		}
	}

	async deleteFavorite(lectureId: string) {

		try {

			const favorites = await scheduleService.deleteFavorite(lectureId);

			this.setFavorites(favorites);

		} catch (error) {
			this.checkToken(error);
		}
	}

	async fetchReservations() {

		try {

			const reservations = await scheduleService.fetchReservations();

			console.log(reservations.toJS());

			this.setReservations(reservations);

		} catch (error) {
			this.checkToken(error);
		}
	}

	async addReservation(workshopId: string) {

		try {

			await scheduleService.addReservation(workshopId);

			const reservations = await scheduleService.fetchReservations();

			this.setReservations(reservations);

		} catch (error) {
			this.checkToken(error);
		}
	}

	async deleteReservation(workshopId: string) {

		try {

			await scheduleService.deleteReservation(workshopId);

			const reservations = await scheduleService.fetchReservations();

			this.setReservations(reservations);

		} catch (error) {
			this.checkToken(error);
		}
	}

	checkToken(error) {

		if (error.response.data.code === 401) {
			this.refreshToken();
		}
	}

	refreshToken() {
		userService.clearToken();
		location.href = '/?login=true';
	}

	abstract setSchedule(payload: SetSchedulePayload);
	abstract setFavorites(payload: SetFavoritesPayload);
	abstract setReservations(payload: SetReservationsPayload);
}
