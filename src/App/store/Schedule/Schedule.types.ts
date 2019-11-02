import {
	Record
} from 'immutable';

export type Schedule = any;

/**
 * Schedule state.
 */

export interface IScheduleStateProps {
	schedule: Schedule[];
}

type ScheduleState = ReturnType<Record.Factory<IScheduleStateProps>>;

const ScheduleState = Record<IScheduleStateProps>({
	schedule: []
});

export {
	ScheduleState
};

/**
 * SetSchedule action.
 */

export type SetSchedulePayload = Schedule[];

export interface ISetScheduleAction {
	payload: SetSchedulePayload;
}
