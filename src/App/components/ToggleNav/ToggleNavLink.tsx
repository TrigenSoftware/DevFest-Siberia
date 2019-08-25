import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	NavLink as RouterNavLink
} from 'react-router-dom';
import {
	Location
} from 'history';
import Link, {
	IProps as ILinkProps
} from '../Link';
import stylesheet from './ToggleNav.st.css';

export interface IProps extends ILinkProps {
	exact?: boolean;
	strict?: boolean;
	isActive?(match: boolean, location: Location): boolean;
}

const {
	className: activeClassName
} = stylesheet('active');

export class ToggleNavLink extends Component<IProps> {

	static propTypes = {
		...Link.propTypes,
		exact:    PropTypes.bool,
		strict:   PropTypes.bool,
		isActive: PropTypes.func
	};

	static defaultProps = Link.defaultProps;

	render() {

		const {
			exact,
			strict,
			isActive,
			'aria-current': ariaCurrent,
			children,
			...props
		} = this.props;

		return (
			<Link
				{...props}
				{...stylesheet('link')}
				linkElement={RouterNavLink}
				linkElementCustomProps={{
					activeClassName,
					exact,
					strict,
					isActive,
					'aria-current': ariaCurrent
				}}
			>
				{children}
			</Link>
		);
	}
}
