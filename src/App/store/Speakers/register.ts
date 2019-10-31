// tslint:disable space-in-parens
import Store from '@flexis/redux';
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

	await fetchSpeakers();
}

export function registerSpeakersSegment(store: Store) {
	store.registerSegment(
		SpeakersSegment,
		loadSpeakersSegmentConfig,
		loadInitialSpeakersData
	);
}
