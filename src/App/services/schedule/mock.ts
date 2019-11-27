import createLogger from '~/services/logger';
import * as speakersService from '~/services/speakers/mock';
import client from './client';
import Reservation from '~/models/Reservation';
import mockFavorites from '~/models/Favorite.mock';
import mockReservations from '~/models/Reservation.mock';
import enSchedule from '~/data/schedule/en.fetch.json?fetch';
import ruSchedule from '~/data/schedule/ru.fetch.json?fetch';

const logger = createLogger('App::services::schedule');

export async function fetch({
	lang = 'en',
	skipSpeakers = false
} = {}) {

	logger.debug('fetch', 'Input lang:', lang);

	const fetchSpeakersTask = !skipSpeakers && speakersService.fetch({
		lang,
		skipSchedule: true
	});
	const url = lang === 'en' ? enSchedule : ruSchedule;
	let schedule: any[] = null;

	if (typeof url !== 'string') {
		schedule = url;
	} else {

		logger.debug('fetch', 'Request url:', url);

		const {
			data
		} = await client.get(url);
		const workshops = await fetchWorkshops();
		const updatedData = data.map((scheduleItem) => {

			if (scheduleItem.id === workshops.workshopId) {
				return {
					...scheduleItem,
					workshopDisabled: workshops.status === 'full' && true
				};
			}
			return scheduleItem;
		});

		schedule = updatedData;
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

			const schedultItemSpeakers = speakersIds
				.map(speakerId => findSpeaker(speakers, speakerId))
				.filter(Boolean);

			return {
				...scheduleItem,
				speakers: schedultItemSpeakers
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
		id:          speaker.id,
		name:        `${speaker.firstname} ${speaker.lastname}`,
		description: speaker.description
	};
}

export async function fetchWorkshops() {

	logger.debug('fetchWorkshops');

	const response = Reservation({
		workshopId: '0IG0y2olrnsldnVT2Vjfg',
		status: 'full'
	});

	logger.debug('fetchWorkshops', 'Response:', response);

	return response;
}

export async function fetchFavorites() {

	logger.debug('fetchFavorites');

	const response = mockFavorites();

	logger.debug('fetchFavorites', 'Response:', response);

	return response;
}

export async function fetchReservations() {

	logger.debug('fetchReservations');

	const response = mockReservations();

	logger.debug('fetchReservations', 'Response:', response);

	return response;
}
