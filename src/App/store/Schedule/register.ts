// tslint:disable space-in-parens
import Store from '@flexis/redux';
import {
	getLocaleFromPath
} from '~/services/i18n';
import {
	IActions
} from '../types';

export const ScheduleSegment = Symbol('schedule');

async function loadScheduleSegmentConfig() {

	const {
		ScheduleReducer,
		ScheduleActions
	} = await import(/* webpackChunkName: 'schedule.segment' */ './');

	return {
		reducer: ScheduleReducer,
		actions: ScheduleActions
	};
}

async function loadInitialScheduleData(store: Store<any, IActions>) {

	const {
		fetchSchedule
	} = store.actions.schedule;
	const lang = getLocaleFromPath(location.pathname);

	await fetchSchedule(lang);
}

export function registerScheduleSegment(store: Store) {
	store.registerSegment(
		ScheduleSegment,
		loadScheduleSegmentConfig,
		loadInitialScheduleData
	);
}
