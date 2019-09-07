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
import {
	style,
	classes
} from './ToggleNav.st.css';

export interface IProps extends ILinkProps {
	exact?: boolean;
	strict?: boolean;
	isActive?(match: boolean, location: Location): boolean;
}

const activeClassName = style(classes.active);

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
				className={classes.link}
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
