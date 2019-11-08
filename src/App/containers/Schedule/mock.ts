import Store, {
	Connect,
	ImmutableAdapter
} from '@flexis/redux';
import {
	IActions,
	State
} from '~/store/types';
import {
	ScheduleActions,
	ScheduleReducer
} from '~/store/Schedule';
import {
	SpeakersReducer,
	SpeakersActions
} from '~/store/Speakers';
import Schedule from './Schedule';
import {
	mapStateToProps,
	mapActionsToProps
} from './connected';

const {
	__REDUX_DEVTOOLS_EXTENSION__
} = global as any;

export default Connect({
	mapStateToProps,
	mapActionsToProps
})(Schedule);

export const store = new Store<State, IActions>({
	adapter:  ImmutableAdapter,
	state:    State(),
	actions:  [
		ScheduleActions,
		SpeakersActions
	],
	reducer:  [
		ScheduleReducer,
		SpeakersReducer
	],
	enhancer: __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
});
