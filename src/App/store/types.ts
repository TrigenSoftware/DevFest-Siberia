import {
	Record
} from 'immutable';
import {
	WeatherState
} from './Weather/Weather.types';
import {
	WeatherActions
} from './Weather/Weather.actions';
import {
	TodoState
} from './Todo/Todo.types';
import {
	TodoActions
} from './Todo/Todo.actions';
import {
	UserState
} from './User/User.types';
import {
	UserActions
} from './User/User.actions';

export * from './Weather/Weather.types';
export * from './Todo/Todo.types';
export * from './User/User.types';

export interface IStateProps {
	weather: WeatherState;
	todo: TodoState;
	user: UserState;
}

export interface IActions {
	weather: WeatherActions;
	todo: TodoActions;
	user: UserActions;
}

type State = ReturnType<Record.Factory<IStateProps>>;

const State = Record<IStateProps>({
	weather: WeatherState(),
	todo:    TodoState(),
	user:    UserState()
});

export {
	State
};
