import React, {
	FormEvent,
	ChangeEvent,
	PureComponent
 } from 'react';
import {
	style,
	classes
} from './TodoListForm.st.css';

export interface ITodoListFormProps {
	className?: string;
	onSubmit?(value: string);
}

interface IState {
	value: string;
}

export default class TodoListForm extends PureComponent<ITodoListFormProps, IState> {

	state = {
		value: ''
	};

	constructor(props) {

		super(props);

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	render() {

		const {
			className
		} = this.props;
		const {
			value
		} = this.state;

		return (
			<form
				className={style(classes.root, className)}
				onSubmit={this.onSubmit}
			>
				<input
					className={classes.input}
					type='text'
					onChange={this.onChange}
					value={value}
				/>
				<button
					className={classes.button}
				>
					Add
				</button>
			</form>
		);
	}

	private onSubmit(event: FormEvent) {

		event.preventDefault();

		const {
			onSubmit
		} = this.props;
		const {
			value
		} = this.state;

		if (typeof onSubmit === 'function') {
			onSubmit(value);
		}

		this.setState(() => ({
			value: ''
		}));
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
