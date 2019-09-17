import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './TicketPreview.st.css';

export type ITicketPreviewDescriptionProps = HTMLAttributes<HTMLDivElement>;

export class TicketPreviewDescription extends Component<ITicketPreviewDescriptionProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				className={classes.description}
			>
				{children}
			</div>
		);
	}
}
