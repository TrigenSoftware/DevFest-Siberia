/* tslint:disable:no-magic-numbers */
import 'dotenv/config';
import moxios from 'moxios';
import userClient from '../user/client';
import {
	fetchFavorites,
	fetchReservations
} from './';
import mockFavorites from '~/models/Favorite.mock';
import mockReservations from '~/models/Reservation.mock';

const MOCK_FETCHFAVORITES_RESPONSE = mockFavorites();
const MOCK_RESERVATIONS_RESPONSE = mockReservations();

describe('API', () => {

	beforeEach(() => {
		moxios.install(userClient);
	});

	afterEach(() => {
		moxios.uninstall(userClient);
	});

	describe('Schedule Service', () => {

		describe('fetchFavorites', () => {

			it('should get correct fetchFavorites data', async () => {

				moxios.stubRequest(/\/favorites/, {
					status:   200,
					response: MOCK_FETCHFAVORITES_RESPONSE
				});

				const fetchFavoritesResponse = await fetchFavorites();

				expect(fetchFavoritesResponse.size).toEqual(3);
			});
		});

		describe('fetchReservations', () => {

			it('should get correct fetchReservations data', async () => {

				moxios.stubRequest(/\/reservation/, {
					status:   200,
					response: MOCK_RESERVATIONS_RESPONSE
				});

				const fetchReservationsResponse = await fetchReservations();

				expect(fetchReservationsResponse.size).toEqual(4);
			});
		});
	});
});
