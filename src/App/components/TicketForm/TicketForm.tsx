import React, {
	FormHTMLAttributes,
	Component
} from 'react';
import stylesheet from './TicketForm.st.css';

export * from './TicketFormGroup';
export * from './TicketFormRow';
export * from './TicketFormLabel';
export * from './TicketFormFooter';

export type IProps = FormHTMLAttributes<HTMLFormElement>;

export default class TicketForm extends Component<IProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<form
				{...props}
				{...stylesheet('root', {}, props)}
			>
				{children}
			</form>
		);
	}
}
