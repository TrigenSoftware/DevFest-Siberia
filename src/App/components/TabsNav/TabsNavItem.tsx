import React, {
	ReactNode,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	ToggleNavLink,
	IProps as IToggleNavLinkProps
} from '../ToggleNav/ToggleNavLink';
import {
	classes
} from './TabsNav.st.css';

export interface IProps extends IToggleNavLinkProps {
	label: ReactNode;
	description?: string;
}

export class TabsNavItem extends Component<IProps> {

	static propTypes = {
		...ToggleNavLink.propTypes,
		label:       PropTypes.node.isRequired,
		description: PropTypes.string
	};

	static defaultProps = ToggleNavLink.defaultProps;

	render() {

		const {
			label,
			description,
			...props
		} = this.props;

		return (
			<ToggleNavLink
				{...props}
				className={classes.item}
			>
				<span
					className={classes.label}
				>
					{label}
				</span>
				{description && (
					<div
						className={classes.description}
					>
						{description}
					</div>
				)}
			</ToggleNavLink>
		);
	}
}
