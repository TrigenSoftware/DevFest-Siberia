import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './TicketForm.st.css';

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
				className={classes.row}
			>
				{children}
			</div>
		);
	}
}
