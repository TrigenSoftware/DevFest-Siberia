/* tslint:disable:no-magic-numbers */
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
	actions:  SpeakersActions,
	reducer:  SpeakersReducer,
	enhancer: __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
});
