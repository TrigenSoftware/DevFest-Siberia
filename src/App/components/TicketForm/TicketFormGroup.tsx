import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './TicketForm.st.css';

export type ITicketFormGroupProps = HTMLAttributes<HTMLDivElement>;

export class TicketFormGroup extends Component<ITicketFormGroupProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				className={classes.group}
			>
				{children}
			</div>
		);
	}
}
