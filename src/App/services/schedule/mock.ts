import createLogger from '~/services/logger';
import * as scheduleService from '~/services/schedule';
import Reservation from '~/models/Reservation';
import mockFavorites from '~/models/Favorite.mock';
import mockReservations from '~/models/Reservation.mock';

const logger = createLogger('App::services::schedule');

export async function fetch({
	lang = 'en'
} = {}) {

	logger.debug('fetch');

	let schedule = await scheduleService.fetch({
		lang,
		skipWorkshops: true
	});
	const workshops = await fetchWorkshops();

	schedule = schedule.map((scheduleItem) => {

		if (scheduleItem.id === workshops.workshopId) {
			return {
				...scheduleItem,
				workshopDisabled: workshops.status === 'full' ? true : false
			};
		}

		return scheduleItem;
	});

	logger.debug('fetch', 'Response:', schedule);

	return schedule;
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
