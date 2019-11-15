import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './TicketPreviewAfterparty.st.css';

export type ITicketPreviewAfterpartyProps = HTMLAttributes<HTMLElement>;

export class TicketPreviewAfterparty extends Component<ITicketPreviewAfterpartyProps> {

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
