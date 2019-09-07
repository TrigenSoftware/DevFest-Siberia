import React, {
	FormEvent,
	ChangeEvent,
	PureComponent
} from 'react';
import {
	style,
	classes
} from './TodoListItem.st.css';

export interface ITodoListItemProps {
	className?: string;
	id: string;
	value: string;
	onSubmit?(id: string, value: string);
	onDelete?(id: string);
}

interface IState {
	originalValue: string;
	value: string;
}

export class TodoListItem extends PureComponent<ITodoListItemProps, IState> {

	static getDerivedStateFromProps(
		{ value }: ITodoListItemProps,
		{ originalValue: prevOriginalValue }: IState
	) {

		if (value !== prevOriginalValue) {
			return {
				originalValue: value,
				value
			};
		}

		return null;
	}

	constructor(props) {

		super(props);

		const value = this.props.value || '';

		this.state = {
			originalValue: value,
			value
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	render() {

		const {
			className
		} = this.props;
		const {
			originalValue,
			value
		} = this.state;
		const valueWasChanged = value !== originalValue;

		return (
			<form
				onSubmit={this.onSubmit}
				className={style(classes.root, className)}
			>
				<input
					className={classes.input}
					type='text'
					onChange={this.onChange}
					value={value}
				/>
				{valueWasChanged && (
					<button
						className={classes.button}
					>
						Save
					</button>
				)}
				<button
					className={classes.button}
					type='button'
					onClick={this.onDelete}
				>
					Delete
				</button>
			</form>
		);
	}

	private onSubmit(event: FormEvent) {

		event.preventDefault();

		const {
			onSubmit,
			id
		} = this.props;
		const {
			value
		} = this.state;

		if (typeof onSubmit === 'function') {
			onSubmit(id, value);
		}
	}

	private onDelete() {

		const {
			onDelete,
			id
		} = this.props;

		if (typeof onDelete === 'function') {
			onDelete(id);
		}
	}

	private onChange(event: ChangeEvent<HTMLInputElement>) {

		const {
			value
		} = event.target;

		this.setState(() => ({
			value
		}));
	}
}
