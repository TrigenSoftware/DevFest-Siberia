import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './LoginModalFooter.st.css';

export type ILoginModalFooterProps = HTMLAttributes<HTMLElement>;

export class LoginModalFooter extends Component<ILoginModalFooterProps> {

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
