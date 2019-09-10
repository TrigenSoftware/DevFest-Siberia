import React, {
	FormHTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './TicketForm.st.css';

export * from './TicketFormRow';
export * from './TicketFormCheckbox';
export * from './TicketFormFooter';

export type IProps = FormHTMLAttributes<HTMLFormElement>;

export default class TicketForm extends Component<IProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<form
				{...props}
				className={style(classes.root, className)}
			>
				{children}
			</form>
		);
	}
}
