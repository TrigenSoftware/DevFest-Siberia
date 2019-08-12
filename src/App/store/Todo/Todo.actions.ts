import {
	AddTodoPayload,
	EditTodoPayload,
	RemoveTodoPayload
} from './Todo.types';
import {
	TodoReducer
} from './Todo.reducer';

export abstract class TodoActions extends TodoReducer.Actions {
	abstract add(payload: AddTodoPayload);
	abstract edit(payload: EditTodoPayload);
	abstract remove(payload: RemoveTodoPayload);
}
