import React, {
	Component
} from 'react';
import Nav, {
	IProps
} from '~/components/Nav';

export class HeaderNav extends Component<IProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<Nav
				{...props}
			>
				{children}
			</Nav>
		);
	}
}
