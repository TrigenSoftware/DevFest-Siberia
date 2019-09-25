// tslint:disable space-in-parens
import Store from '@flexis/redux';

export const UserSegment = Symbol('user');

async function loadUserSegmentConfig() {

	const {
		UserReducer,
		UserActions
	} = await import(/* webpackChunkName: 'user.segment' */ './');

	return {
		reducer: UserReducer,
		actions: UserActions
	};
}

export function registerUserSegment(store: Store) {
	store.registerSegment(
		UserSegment,
		loadUserSegmentConfig
	);
}
