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

async function loadInitialScheduleData(store: Store<any, IActions>, context: Record<string, any>) {

	const {
		fetchSchedule
	} = store.actions.schedule;
	const locale = context.locale || getLocaleFromPath(location.pathname);

	await fetchSchedule(locale);
}

export function registerScheduleSegment(store: Store) {
	store.registerSegment(
		ScheduleSegment,
		loadScheduleSegmentConfig,
		loadInitialScheduleData
	);
}
