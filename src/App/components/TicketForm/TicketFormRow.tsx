import React, {
	HTMLAttributes,
	Component
} from 'react';
import stylesheet from './TicketForm.st.css';

export type ITicketFormRowProps = HTMLAttributes<HTMLDivElement>;

export class TicketFormRow extends Component<ITicketFormRowProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				{...stylesheet('row')}
			>
				{children}
			</div>
		);
	}
}
