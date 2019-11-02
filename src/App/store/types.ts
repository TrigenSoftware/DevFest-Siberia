import {
	Record
} from 'immutable';
import {
	UserState
} from './User/User.types';
import {
	UserActions
} from './User/User.actions';
import {
	SpeakersState
} from './Speakers/Speakers.types';
import {
	SpeakersActions
} from './Speakers/Speakers.actions';
import {
	ScheduleState
} from './Schedule/Schedule.types';
import {
	ScheduleActions
} from './Schedule/Schedule.actions';

export * from './User/User.types';
export * from './Speakers/Speakers.types';
export * from './Schedule/Schedule.types';

export interface IStateProps {
	user: UserState;
	speakers: SpeakersState;
	schedule: ScheduleState;
}

export interface IActions {
	user: UserActions;
	speakers: SpeakersActions;
	schedule: ScheduleActions;
}

type State = ReturnType<Record.Factory<IStateProps>>;

const State = Record<IStateProps>({
	user:     UserState(),
	speakers: SpeakersState(),
	schedule: ScheduleState()
});

export {
	State
};
