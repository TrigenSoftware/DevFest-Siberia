import React, {
	Component
} from 'react';
import {
	ITodoStateProps,
	AddTodoPayload,
	EditTodoPayload,
	RemoveTodoPayload
} from '~/store/types';
import TodoList, {
	TodoListItem
} from '~/components/TodoList';
import {
	classes
} from './Todo.st.css';

export interface IProps extends ITodoStateProps {
	add(payload: AddTodoPayload);
	edit(payload: EditTodoPayload);
	remove(payload: RemoveTodoPayload);
}

export class TodoContainer extends Component<IProps> {

	constructor(props) {

		super(props);

		this.onAdd = this.onAdd.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	render() {

		const {
			items
		} = this.props;

		if (!items) {
			return null;
		}

		return (
			<main
				className={classes.root}
			>
				<TodoList
					onAdd={this.onAdd}
					onChange={this.onChange}
					onDelete={this.onDelete}
				>
					{items.map(({
						id,
						text
					}) => (
						<TodoListItem
							key={id}
							id={id}
							value={text}
						/>
					)).toJS()}
				</TodoList>
			</main>
		);
	}

	private onAdd(text: string) {

		const {
			add
		} = this.props;
		const id = String(Date.now());

		add({
			id,
			text
		});
	}

	private onChange(id: string, text: string) {

		const {
			edit
		} = this.props;

		edit({
			id,
			text
		});
	}

	private onDelete(id: string) {

		const {
			remove
		} = this.props;

		remove(id);
	}
}
