import * as scheduleService from '~/services/schedule';
import {
	IActions,
	State
} from '../types';
import {
	SetSchedulePayload,
	ScheduleState
} from './Schedule.types';
import {
	ScheduleReducer
} from './Schedule.reducer';

export const AllScheduleType = 'all';

export abstract class ScheduleActions extends ScheduleReducer.Actions<ScheduleState, State, IActions> {

	selectScheduleByType(date: string, type: string) {

		const {
			schedule
		} = this.state;

		const filtredByDate = schedule.filter(item => item.date === date);

		if (type && type !== AllScheduleType) {

			switch (type) {

				case 'junior':
				case 'middle':
				case 'senior':
					return filtredByDate.filter(item => item.talkLevelBadge && item.talkLevelBadge.toLowerCase() === type);

				default:
					return filtredByDate.filter(item => item.talkTypeBadge && item.talkTypeBadge.toLowerCase() === type);
			}
		}

		return filtredByDate;
	}

	async fetchSchedule() {

		const schedule = await scheduleService.fetch();

		this.setSchedule(schedule);
	}

	abstract setSchedule(payload: SetSchedulePayload);
}
