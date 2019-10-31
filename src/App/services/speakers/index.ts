import createLogger from '~/services/logger';
import client from './client';
import enSpeakers from '~/data/speakers/en.fetch.json?fetch';

const logger = createLogger('App::services::speakers');

export async function fetch(lang = 'en') {

	logger.debug('fetch', 'Input lang:', lang);

	const url = lang === 'en' ? enSpeakers : '';
	let speakers: any[] = null;

	if (typeof url !== 'string') {
		speakers = url;
	} else {

		logger.debug('fetch', 'Request url:', url);

		const {
			data
		} = await client.get(url);

		speakers = data;
	}

	const safeSpeakers = speakers.map(speaker => ({
		...speaker,
		text: speaker.text.replace(/(href=)/g, 'rel="noopener noreferrer" $1')
	}));

	logger.debug('fetch', 'Response:', safeSpeakers);

	return safeSpeakers;
}
