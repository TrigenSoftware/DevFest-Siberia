import createLogger from '~/services/logger';
import mockFavorites, {
	mockFavorite
} from '~/models/Favorite.mock';
import mockReservations from '~/models/Reservation.mock';

const logger = createLogger('App::services::schedule');

export async function fetchFavorites() {

	logger.debug('fetchFavorites');

	const response = mockFavorites();

	logger.debug('fetchFavorites', 'Response:', response);

	return response;
}

export async function fetchAddFavorite() {

	logger.debug('fetchAddFavorite');

	const response = mockFavorite();

	logger.debug('fetchAddFavorite', 'Response:', response);

	return response;
}

export async function fetchReservations() {

	logger.debug('fetchReservations');

	const response = mockReservations();

	logger.debug('fetchReservations', 'Response:', response);

	return response;
}
