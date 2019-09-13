import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './TicketPreview.st.css';

export type ITickerPreviewGroupProps = HTMLAttributes<HTMLDivElement>;

export class TickerPreviewGroup extends Component<ITickerPreviewGroupProps> {

	render() {

		const {
			className,
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
