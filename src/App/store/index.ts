import Store, {
	ImmutableAdapter
} from '@flexis/redux';
import {
	State,
	IActions
} from './types';
import {
	registerUserSegment
} from './User/register';
import {
	registerSpeakersSegment
} from './Speakers/register';

const {
	__REDUX_DEVTOOLS_EXTENSION__
} = global as any;

export default function createStore() {

	const store = new Store<State, IActions>({
		adapter:  ImmutableAdapter,
		state:    State(),
		enhancer: __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
	});

	registerUserSegment(store);
	registerSpeakersSegment(store);

	return store;
}
