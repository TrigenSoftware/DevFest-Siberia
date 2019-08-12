import {
	Record,
	List
} from 'immutable';
import TodoItem, {
	ITodoItemProps
} from '~/models/TodoItem';

/**
 * Todo state.
 */

export interface ITodoStateProps {
	items: List<TodoItem>;
}

type TodoState = ReturnType<Record.Factory<ITodoStateProps>>;

const TodoState = Record<ITodoStateProps>({
	items: List()
});

export {
	TodoState
};

/**
 * AddTodo action.
 */

export type AddTodoPayload = ITodoItemProps;

export interface IAddTodoAction {
	payload: AddTodoPayload;
}

/**
 * EditTodo action.
 */

export type EditTodoPayload = ITodoItemProps;

export interface IEditTodoAction {
	payload: EditTodoPayload;
}

/**
 * RemoveTodo action.
 */

export type RemoveTodoPayload = string;

export interface IRemoveTodoAction {
	payload: RemoveTodoPayload;
}
