import Store, {
	Connect,
	ImmutableAdapter
} from '@flexis/redux';
import {
	IActions,
	State
} from '~/store/types';
import {
	SpeakersSegment
} from '~/store/segments';
import {
	SpeakersActions,
	SpeakersReducer
} from '~/store/Speakers';
import SpeakersPromo from './SpeakersPromo';
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
})(SpeakersPromo);

export const store = new Store<State, IActions>({
	adapter:  ImmutableAdapter,
	state:    State(),
	actions:  SpeakersActions,
	reducer:  SpeakersReducer,
	enhancer: __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
});

// Mark as loaded.
(store as any).segmentsRegistry.set(SpeakersSegment, null);
