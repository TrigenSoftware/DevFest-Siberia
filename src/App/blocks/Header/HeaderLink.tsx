import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import Link, {
	IProps as ILinkProps
} from '~/components/Link';
import {
	NavLink
} from '~/components/Nav';
import stylesheet from './Header.st.css';

export interface IProps extends ILinkProps {
	separated?: boolean;
}

export class HeaderLink extends Component<IProps> {

	static propTypes = {
		...Link.propTypes,
		separated: PropTypes.bool
	};

	static defaultProps = {
		...Link.defaultProps,
		separated: false
	};

	render() {

		const {
			separated,
			children,
			...props
		} = this.props;

		return (
			<NavLink
				{...props}
				{...stylesheet('link', {
					separated
				}, props)}
			>
				{children}
			</NavLink>
		);
	}
}
