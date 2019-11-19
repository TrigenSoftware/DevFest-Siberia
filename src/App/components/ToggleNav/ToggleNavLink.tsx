import React, {
	ContextType,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	I18nContext
} from 'i18n-for-react';
import {
	NavLink as RouterNavLink
} from 'react-router-dom';
import {
	Location
} from 'history';
import {
	Bind
} from '@flexis/ui/helpers';
import {
	getLocalizedPath
} from '~/services/i18n';
import Link, {
	IProps as ILinkProps
} from '../Link';
import {
	classes
} from './ToggleNav.st.css';

export interface IProps extends ILinkProps {
	exact?: boolean;
	strict?: boolean;
	isActive?(match: boolean, location: Location): boolean;
}

const {
	active: activeClassName
} = classes;

export class ToggleNavLink extends Component<IProps> {

	static propTypes = {
		...Link.propTypes,
		exact:    PropTypes.bool,
		strict:   PropTypes.bool,
		isActive: PropTypes.func
	};

	static defaultProps = Link.defaultProps;

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

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
					'isActive':     isActive || this.isActive,
					'aria-current': ariaCurrent
				}}
			>
				{children}
			</Link>
		);
	}

	@Bind()
	private isActive(_, {
		pathname,
		search
	}) {

		const {
			to
		} = this.props;

		if (typeof to === 'string') {
			return getLocalizedPath(this.context, to) === `${pathname}${search}`;
		}

		return to.pathname === pathname && to.search === search;
	}
}
