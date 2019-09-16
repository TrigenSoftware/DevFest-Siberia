import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './TicketPreviewAuxiliary.st.css';

export type ITicketPreviewAuxiliaryProps = HTMLAttributes<HTMLElement>;

export class TicketPreviewAuxiliary extends Component<ITicketPreviewAuxiliaryProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<section
				{...props}
				className={style(classes.root, className)}
			>
				<div
					className={classes.content}
				>
					{children}
				</div>
			</section>
		);
	}
}