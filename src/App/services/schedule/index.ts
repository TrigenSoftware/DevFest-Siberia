import createLogger from '~/services/logger';
import * as speakersService from '~/services/speakers';
import client from './client';
import userClinet from '../user/client';
import enSchedule from '~/data/schedule/en.fetch.json?fetch';
import {
	favoritesFromResponseData,
	reservationsFromResponseData,
	reservationFromResponseData
} from './adapters';

const logger = createLogger('App::services::schedule');

export async function fetch({
	lang = 'en',
	skipSpeakers = false
} = {}) {

	logger.debug('fetch', 'Input lang:', lang);

	const fetchSpeakersTask = !skipSpeakers && speakersService.fetch({
		skipSchedule: true
	});
	const url = lang === 'en' ? enSchedule : '';
	let schedule: any[] = null;

	if (typeof url !== 'string') {
		schedule = url;
	} else {

		logger.debug('fetch', 'Request url:', url);

		const {
			data
		} = await client.get(url);

		schedule = data;
	}

	if (fetchSpeakersTask) {

		const speakers = await fetchSpeakersTask;

		schedule = schedule.map((scheduleItem) => {

			const {
				speakers: speakersIds
			} = scheduleItem;

			if (!speakersIds) {
				return scheduleItem;
			}

			const shcedultItemSpeakers = speakersIds
				.map(speakerId => findSpeaker(speakers, speakerId))
				.filter(Boolean);

			return {
				...scheduleItem,
				speakers: shcedultItemSpeakers
			};
		});
	}

	logger.debug('fetch', 'Response:', schedule);

	return schedule;
}

function findSpeaker(speakers: any[], id: string) {

	const speaker = speakers.find(_ => _.id === id);

	if (!speaker) {
		return null;
	}

	return {
		name:        `${speaker.firstname} ${speaker.lastname}`,
		description: speaker.description
	};
}

export async function fetchFavorites() {

	logger.debug('fetchFavorites');

	const {
		data: favoritesData
	} = await userClinet.get('api/favorites');

	logger.debug('fetchFavorites', 'Response:', favoritesData);

	return favoritesFromResponseData(favoritesData);
}

export async function addFavorite(lectureId: string) {

	logger.debug('addFavorite');

	const {
		data: favoritesData
	} = await userClinet.put(`api/favorites/${lectureId}`);

	logger.debug('addFavorite', 'Response:', favoritesData);

	return favoritesFromResponseData(favoritesData);
}

export async function deleteFavorite(lectureId: string) {

	logger.debug('deleteFavorite');

	const {
		data: favoritesData
	} = await userClinet.delete(`api/favorites/${lectureId}`);

	logger.debug('deleteFavorite', 'Response:', favoritesData);

	return favoritesFromResponseData(favoritesData);
}

export async function fetchReservations() {

	logger.debug('fetchReservation');

	const {
		data: reservationsData
	} = await userClinet.get('api/reservation/all');

	logger.debug('fetchReservation', 'Response:', reservationsData);

	return reservationsFromResponseData(reservationsData);
}

export async function addReservation(workshopId: string) {

	logger.debug('addReservation');

	const {
		data: addedReservation
	} = await userClinet.put(`api/reservation/${workshopId}`);

	logger.debug('addedReservation', 'Response:', addedReservation);

	return reservationFromResponseData(addedReservation);
}

export async function deleteReservation(workshopId: string) {

	logger.debug('deleteReservation');

	const {
		data: deletedReservation
	} = await userClinet.delete(`api/reservation/${workshopId}`);

	logger.debug('deleteReservation', 'Response:', deletedReservation);

	return reservationFromResponseData(deletedReservation);
}
