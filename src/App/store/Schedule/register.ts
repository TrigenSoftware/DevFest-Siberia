// tslint:disable space-in-parens
import Store from '@flexis/redux';
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
		fetchSchedule,
		fetchFavorites,
		fetchReservations
	} = store.actions.schedule;

	await fetchSchedule();
	await fetchFavorites();
	await fetchReservations();
}

export function registerScheduleSegment(store: Store) {
	store.registerSegment(
		ScheduleSegment,
		loadScheduleSegmentConfig,
		loadInitialScheduleData
	);
}
