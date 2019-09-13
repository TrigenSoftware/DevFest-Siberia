import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './TicketPreview.st.css';

export * from './TickerPreviewPrimary';
export * from './TickerPreviewGroup';
export * from './TickerPreviewField';
export * from './TicketPreviewAuxiliary';

export type IProps = HTMLAttributes<HTMLElement>;

export default class TicketPreview extends Component<IProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<figure
				{...props}
				className={style(classes.root, className)}
			>
				<div
					className={classes.content}
				>
					{children}
				</div>
			</figure>
		);
	}
}
