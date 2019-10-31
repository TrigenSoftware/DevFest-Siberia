import createLogger from '~/services/logger';
import client from './client';
import enSchedule from '~/data/schedule/en.fetch.json?fetch';

const logger = createLogger('App::services::schedule');

export async function fetch(lang = 'en') {

	logger.debug('fetch', 'Input lang:', lang);

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

	logger.debug('fetch', 'Response:', schedule);

	return schedule;
}
