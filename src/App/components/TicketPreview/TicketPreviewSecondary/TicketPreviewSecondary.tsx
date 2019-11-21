import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './TicketPreviewSecondary.st.css';

export type ITicketPreviewSecondaryProps = HTMLAttributes<HTMLElement>;

export class TicketPreviewSecondary extends Component<ITicketPreviewSecondaryProps> {

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
					<div
						className={classes.border}
					>
						{children}
					</div>
				</div>
			</section>
		);
	}
}
