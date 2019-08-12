import Store from '@flexis/redux';

export const TodoSegment = Symbol('todo');

async function loadTodoSegmentConfig() {

	const {
		TodoReducer,
		TodoActions
	} = await import('./');

	return {
		reducer: TodoReducer,
		actions: TodoActions
	};
}

export function registerTodoSegment(store: Store) {
	store.registerSegment(
		TodoSegment,
		loadTodoSegmentConfig
	);
}
