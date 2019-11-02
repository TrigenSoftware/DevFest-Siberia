import {
	Reducer
} from '@flexis/redux';
import {
	ScheduleState,
	ISetScheduleAction
} from './Schedule.types';

export class ScheduleReducer extends Reducer {

	static namespace = 'schedule';

	setSchedule(state: ScheduleState, { payload }: ISetScheduleAction) {
		return state.set(
			'schedule',
			payload
		);
	}
}
