import React, {
	Component
} from 'react';
import Link, {
	IProps as ILinkProps
} from '../Link';
import {
	classes
} from './LoginModal.st.css';

type ILoginModalLinkProps = ILinkProps;

export class LoginModalLink extends Component<ILoginModalLinkProps> {

	static propTypes = Link.propTypes;
	static defaultProps = Link.defaultProps;

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<Link
				{...props}
				className={classes.link}
			>
				{children}
			</Link>
		);
	}
}
