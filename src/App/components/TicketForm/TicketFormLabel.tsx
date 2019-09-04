import React, {
	LabelHTMLAttributes,
	Component
} from 'react';
import stylesheet from './TicketForm.st.css';

export type ITicketFormLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export class TicketFormLabel extends Component<ITicketFormLabelProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<label
				{...props}
				{...stylesheet('label')}
			>
				{children}
			</label>
		);
	}
}
