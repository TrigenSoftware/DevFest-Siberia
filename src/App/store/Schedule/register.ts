// tslint:disable space-in-parens
import Store from '@flexis/redux';

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

export function registerScheduleSegment(store: Store) {
	store.registerSegment(
		ScheduleSegment,
		loadScheduleSegmentConfig
	);
}
