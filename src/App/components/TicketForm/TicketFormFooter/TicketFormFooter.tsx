import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './TicketFormFooter.st.css';

export type ITicketFormFooterProps = HTMLAttributes<HTMLElement>;

export class TicketFormFooter extends Component<ITicketFormFooterProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<footer
				{...props}
				className={style(classes.root, className)}
			>
				{children}
			</footer>
		);
	}
}
