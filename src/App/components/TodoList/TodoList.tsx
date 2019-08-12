import React, {
	ReactElement,
	PureComponent,
	Children,
	cloneElement
} from 'react';
import TodoListForm from './TodoListForm';
import stylesheet from './TodoList.st.css';

export * from './TodoListItem';

export interface IProps {
	children: ReactElement<any>|ReactElement<any>[];
	onAdd?(text: string);
	onChange?(id: string, text: string);
	onDelete?(id: string);
}

interface IState {
	value: string;
}

export default class TodoList extends PureComponent<IProps, IState> {

	constructor(props) {

		super(props);

		this.onAdd = this.onAdd.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	render() {

		const {
			children
		} = this.props;

		return (
			<div
				{...stylesheet('root', {}, this.props)}
			>
				<TodoListForm
					{...stylesheet('form')}
					onSubmit={this.onAdd}
				/>
				{Children.map(children, (child: ReactElement<any>) => child && (
					cloneElement(child, {
						...stylesheet('item', {}, child.props),
						onSubmit: this.onChange,
						onDelete: this.onDelete
					})
				))}
			</div>
		);
	}

	private onAdd(value: string) {

		const {
			onAdd
		} = this.props;

		if (typeof onAdd === 'function') {
			onAdd(value);
		}
	}

	private onChange(id: string, value: string) {

		const {
			onChange
		} = this.props;

		if (typeof onChange === 'function') {
			onChange(id, value);
		}
	}

	private onDelete(id: string) {

		const {
			onDelete
		} = this.props;

		if (typeof onDelete === 'function') {
			onDelete(id);
		}
	}
}
