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

export * from './Weather/Weather.types';
export * from './Todo/Todo.types';

export interface IStateProps {
	weather: WeatherState;
	todo: TodoState;
}

export interface IActions {
	weather: WeatherActions;
	todo: TodoActions;
}

type State = ReturnType<Record.Factory<IStateProps>>;

const State = Record<IStateProps>({
	weather: WeatherState(),
	todo:    TodoState()
});

export {
	State
};
