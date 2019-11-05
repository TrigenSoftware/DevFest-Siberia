/* tslint:disable:no-magic-numbers */
import 'dotenv/config';
import moxios from 'moxios';
import userClient from './client';
import {
	buy,
	login,
	fetchOrders,
	fetchFavorites
} from './';
import mockFavorites from '~/models/Favorite.mock';

const MOCK_LOGIN_RESPONSE = {
	authKey: 'string',
	profile: {
		userId:    123,
		email:     'test@mail.ru',
		firstname: 'firstname',
		lastname:  'lastname',
		company:   'company',
		city:      'city'
	}
};
const MOCK_BUY_RESPONSE = {
	paymentDetails: {
		redirectUrl: 'string'
	}
};
const MOCK_BUY_DATA = {
	email:          'user@example.com',
	firstName:      'string',
	lastName:       'string',
	company:        'string',
	position:       'string',
	city:           'string',
	termsAccepted:  true,
	paymentRequest: {
		locale:    'ru',
		products:  [
			{
				productRef: 'string'
			}
		],
		promocode: 'string'
	}
};
const MOCK_FETCHORDERS_RESPONSE = [
	{
		status:      'string',
		paymentLink: 'string',
		items:       [
			{
				productRef:         'string',
				productName:        'string',
				productDescription: 'string',
				price:              0,
				originalPrice:      0,
				promocode:          'string',
				ticket: {
					ticketUID:      'string'
				}
			}
		]
	}
];
const MOCK_FETCHFAVORITES_RESPONSE = mockFavorites();

describe('API', () => {

	beforeEach(() => {
		moxios.install(userClient);
	});

	afterEach(() => {
		moxios.uninstall(userClient);
	});

	describe('User Service', () => {

		describe('login', () => {

			it('should get correct login data', async () => {

				moxios.stubRequest(/\/login/, {
					status:   200,
					response: MOCK_LOGIN_RESPONSE
				});

				const loginResponse = await login('test@mail.ru', 'some-password');

				expect(typeof loginResponse.userId).toBe('number');
				expect(typeof loginResponse.firstname).toBe('string');
				expect(typeof loginResponse.lastname).toBe('string');
				expect(typeof loginResponse.company).toBe('string');
				expect(typeof loginResponse.city).toBe('string');
			});
		});

		describe('buy', () => {

			it('should get correct buy data', async () => {

				moxios.stubRequest(/\/register/, {
					status:   200,
					response: MOCK_BUY_RESPONSE
				});

				const buyResponse = await buy(MOCK_BUY_DATA);

				expect(typeof buyResponse).toBe('string');
			});
		});

		describe('fetchOrders', () => {

			it('should get correct fetchOrders data', async () => {

				moxios.stubRequest(/\/orders/, {
					status:   200,
					response: MOCK_FETCHORDERS_RESPONSE
				});

				const fetchOrdersResponse = await fetchOrders();

				expect(typeof fetchOrdersResponse.status).toBe('string');
				expect(typeof fetchOrdersResponse.paymentLink).toBe('string');
				expect(typeof fetchOrdersResponse.items).toBe('object');
			});
		});

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
	});
});
