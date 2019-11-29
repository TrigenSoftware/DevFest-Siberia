import Store, {
	Connect,
	ImmutableAdapter
} from '@flexis/redux';
import {
	IActions,
	State
} from '~/store/types';
import {
	SpeakersActions,
	SpeakersReducer
} from '~/store/Speakers';
import {
	ScheduleReducer
} from '~/store/Schedule';
import {
	ScheduleActions
} from '~/store/Schedule/Schedule.actions.mock';
import Speakers from './Speakers';
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
})(Speakers);

export const store = new Store<State, IActions>({
	adapter:  ImmutableAdapter,
	state:    State(),
	actions:  [
		SpeakersActions,
		ScheduleActions
	],
	reducer:  [
		SpeakersReducer,
		ScheduleReducer
	],
	enhancer: __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
});

export const actions = {

	generate() {

		const {
			schedule
		} = store.actions;

		schedule.fetchSchedule();
	}
};

actions.generate();
