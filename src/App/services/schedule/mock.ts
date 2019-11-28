import createLogger from '~/services/logger';
import * as scheduleService from '~/services/schedule';
import mockFavorites from '~/models/Favorite.mock';
import mockReservations from '~/models/Reservation.mock';

const logger = createLogger('App::services::schedule');

export async function fetch() {

	logger.debug('fetch');

	const schedule = await scheduleService.fetch({
		skipWorkshops: true
	});

	logger.debug('fetch', 'Response:', schedule);

	return schedule;
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
