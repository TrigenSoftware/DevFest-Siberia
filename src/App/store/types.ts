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

export * from './User/User.types';
export * from './Speakers/Speakers.types';

export interface IStateProps {
	user: UserState;
	speakers: SpeakersState;
}

export interface IActions {
	user: UserActions;
	speakers: SpeakersActions;
}

type State = ReturnType<Record.Factory<IStateProps>>;

const State = Record<IStateProps>({
	user:     UserState(),
	speakers: SpeakersState()
});

export {
	State
};
