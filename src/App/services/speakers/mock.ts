import createLogger from '~/services/logger';
import * as speakersService from '~/services/speakers';

const logger = createLogger('App::services::speakers');

export async function fetch({
	lang = 'en'
} = {}) {

	logger.debug('fetch');

	const speakers = speakersService.fetch({
		lang
	});

	logger.debug('fetch', 'Response:', speakers);

	return speakers;
}
