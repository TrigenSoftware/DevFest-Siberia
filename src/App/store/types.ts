import {
	Record
} from 'immutable';
import {
	UserState
} from './User/User.types';
import {
	UserActions
} from './User/User.actions';

export * from './User/User.types';

export * from './User/User.actions';

export interface IStateProps {
	user: UserState;
}

export interface IActions {
	user: UserActions;
}

type State = ReturnType<Record.Factory<IStateProps>>;

const State = Record<IStateProps>({
	user: UserState()
});

export {
	State
};
