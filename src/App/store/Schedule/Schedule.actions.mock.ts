/* tslint:disable:no-magic-numbers */
import {
	List
} from 'immutable';
import * as scheduleService from '~/services/schedule/mock';
import Favorite from '~/models/Favorite';
import Reservation from '~/models/Reservation';
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

	async fetchSchedule(lang: string) {

		const schedule = await scheduleService.fetch({
			lang
		});

		this.setSchedule(schedule);
	}

	async fetchFavorites() {

		const favorites = await scheduleService.fetchFavorites();

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

		const reservations = await scheduleService.fetchReservations();

		this.setReservations(reservations);
	}

	async addReservation(workshopId: string) {

		const {
			reservations
		} = this.state;
		const addedReservation = Reservation({
			workshopId,
			status: 'reserved'
		});
		const updatedReservations = reservations.push(addedReservation);

		this.setReservations(updatedReservations);
	}

	async deleteReservation(workshopId: string) {

		const {
			reservations
		} = this.state;
		const reservationIndex = reservations.findIndex(_ => _.workshopId === workshopId);
		const updatedReservations = reservations.delete(reservationIndex);

		this.setReservations(updatedReservations);
	}

	selectIsFavorite(favorites: List<Favorite>, id: string): boolean {
		return favorites.some(_ => _.lectureId === id);
	}

	selectIsReserved(reservations: List<Reservation>, id: string): boolean {
		return reservations.some(_ => _.workshopId === id);
	}

	abstract setSchedule(payload: SetSchedulePayload);
	abstract setFavorites(payload: SetFavoritesPayload);
	abstract setReservations(payload: SetReservationsPayload);
}
