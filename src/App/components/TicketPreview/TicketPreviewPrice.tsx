import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './TicketPreview.st.css';

export type ITicketPreviewPriceProps = HTMLAttributes<HTMLHeadingElement>;

export class TicketPreviewPrice extends Component<ITicketPreviewPriceProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<h4
				{...props}
				className={classes.price}
			>
				{children}
			</h4>
		);
	}
}
