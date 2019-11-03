import createLogger from '~/services/logger';
import * as speakersService from '~/services/speakers';
import client from './client';
import enSchedule from '~/data/schedule/en.fetch.json?fetch';

const logger = createLogger('App::services::schedule');

export async function fetch(lang = 'en') {

	logger.debug('fetch', 'Input lang:', lang);

	const fetchSpeakersTask = speakersService.fetch();
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
