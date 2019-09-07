import React, {
	Component
} from 'react';
import Nav, {
	IProps
} from '~/components/Nav';
import {
	style,
	classes
} from './Header.st.css';

export class HeaderNav extends Component<IProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<Nav
				{...props}
				className={style(classes.nav, className)}
			>
				{children}
			</Nav>
		);
	}
}
