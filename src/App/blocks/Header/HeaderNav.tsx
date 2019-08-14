import React, {
	Component
} from 'react';
import Nav, {
	IProps
} from '~/components/Nav';
import stylesheet from './Header.st.css';

export class HeaderNav extends Component<IProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<Nav
				{...props}
				{...stylesheet('nav')}
			>
				{children}
			</Nav>
		);
	}
}
