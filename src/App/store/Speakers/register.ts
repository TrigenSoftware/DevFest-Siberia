// tslint:disable space-in-parens
import Store from '@flexis/redux';
import {
	getLocaleFromPath
} from '~/services/i18n';
import {
	IActions
} from '../types';

export const SpeakersSegment = Symbol('speakers');

async function loadSpeakersSegmentConfig() {

	const {
		SpeakersReducer,
		SpeakersActions
	} = await import(/* webpackChunkName: 'speakers.segment' */ './');

	return {
		reducer: SpeakersReducer,
		actions: SpeakersActions
	};
}

async function loadInitialSpeakersData(store: Store<any, IActions>) {

	const {
		fetchSpeakers
	} = store.actions.speakers;
	const lang = getLocaleFromPath(location.pathname);

	await fetchSpeakers(lang);
}

export function registerSpeakersSegment(store: Store) {
	store.registerSegment(
		SpeakersSegment,
		loadSpeakersSegmentConfig,
		loadInitialSpeakersData
	);
}
