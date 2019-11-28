import createLogger from '~/services/logger';
import * as scheduleService from '~/services/schedule';
import client from './client';
import enSpeakers from '~/data/speakers/en.fetch.json?fetch';
import ruSpeakers from '~/data/speakers/ru.fetch.json?fetch';

const logger = createLogger('App::services::speakers');

export async function fetch({
	lang = 'en',
	skipSchedule = false
} = {}) {

	logger.debug('fetch', 'Input lang:', lang);

	const fetchScheduleTask = !skipSchedule && scheduleService.fetch({
		lang,
		skipSpeakers: true,
		skipWorkshops: true
	});
	const url = lang === 'en' ? enSpeakers : ruSpeakers;
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

	speakers = speakers.map(speaker => ({
		...speaker,
		text: speaker.text.replace(/(href=)/g, 'rel="noopener noreferrer" $1')
	}));

	if (fetchScheduleTask) {

		const schedule = await fetchScheduleTask;

		speakers = speakers.map((speaker) => {

			const talks = findTalks(schedule, speaker.id);

			return {
				...speaker,
				talks
			};
		});
	}

	logger.debug('fetch', 'Response:', speakers);

	return speakers;
}

function findTalks(schedule: any[], id: string) {
	return schedule.filter(({
		speakers
	}) =>
		speakers && speakers.includes(id)
	);
}
