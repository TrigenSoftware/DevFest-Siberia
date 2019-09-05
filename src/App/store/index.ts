import Store, {
	ImmutableAdapter
} from '@flexis/redux';
import {
	State,
	IActions
} from './types';
import {
	registerWeatherSegment
} from './Weather/register';
import {
	registerTodoSegment
} from './Todo/register';

const {
	__REDUX_DEVTOOLS_EXTENSION__
} = global as any;

export default function createStore() {

	const store = new Store<State, IActions>({
		adapter:  ImmutableAdapter,
		state:    State(),
		enhancer: __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
	});

	registerWeatherSegment(store);
	registerTodoSegment(store);

	return store;
}
