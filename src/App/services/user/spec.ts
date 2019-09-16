import 'dotenv/config';
import moxios from 'moxios';
import userClient from './client';
import {
	login
} from './';

const MOCK_LOGIN_RESPONSE = {
	userId:    123,
	email:     'test@mail.ru',
	firstname: 'firstname',
	lastname:  'lastname',
	company:   'company',
	city:      'city'
};

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
					status:    200,
					response: MOCK_LOGIN_RESPONSE
				});

				const currentLogin = await login('test@mail.ru', 'some-password');

				expect(typeof currentLogin.userId).toBe('number');
				expect(typeof currentLogin.firstname).toBe('string');
				expect(typeof currentLogin.lastname).toBe('string');
				expect(typeof currentLogin.company).toBe('string');
				expect(typeof currentLogin.city).toBe('string');
			});
		});
	});
});
