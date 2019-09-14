import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './LoginModal.st.css';

export type ILoginModalTitleProps = HTMLAttributes<HTMLHeadingElement>;

export class LoginModalTitle extends Component<ILoginModalTitleProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<h2
				{...props}
				className={classes.title}
			>
				{children}
			</h2>
		);
	}
}
