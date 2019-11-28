import Store, {
	Connect,
	ImmutableAdapter
} from '@flexis/redux';
import {
	IActions,
	State
} from '~/store/types';
import {
	ScheduleReducer
} from '~/store/Schedule';
import {
	ScheduleActions
} from '~/store/Schedule/Schedule.actions.mock';
import {
	UserActions
} from '~/store/User/User.actions.mock';
import {
	SpeakersActions,
	SpeakersReducer
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
		SpeakersActions,
		UserActions
	],
	reducer:  [
		ScheduleReducer,
		SpeakersReducer
	],
	enhancer: __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
});

export const actions = {

	generate() {

		const {
			schedule,
			user
		} = store.actions;

		schedule.fetchSchedule();
		schedule.fetchFavorites();
		schedule.fetchReservations();
		user.setToken('token');
		user.login('test', 'test');
	}
};

actions.generate();
