import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './TicketPreview.st.css';

export type ITicketPreviewSaleProps = HTMLAttributes<HTMLDivElement>;

export class TicketPreviewSale extends Component<ITicketPreviewSaleProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				className={classes.sale}
			>
				{children}
			</div>
		);
	}
}
