import React, {
	HTMLAttributes,
	Component
} from 'react';
import stylesheet from './TicketFormFooter.st.css';

export type ITicketFormFooterProps = HTMLAttributes<HTMLElement>;

export class TicketFormFooter extends Component<ITicketFormFooterProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<footer
				{...props}
				{...stylesheet('root', {}, props)}
			>
				{children}
			</footer>
		);
	}
}
