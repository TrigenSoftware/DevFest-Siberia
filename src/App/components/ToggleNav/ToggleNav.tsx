import React, {
	HTMLAttributes,
	Children,
	Component
} from 'react';
import {
	style,
	classes
} from './ToggleNav.st.css';

export * from './ToggleNavLink';

export type IProps = HTMLAttributes<HTMLElement>;

export default class ToggleNav extends Component<IProps> {

	render() {

		const {
			className,
			color,
			children,
			...props
		} = this.props;

		return (
			<nav
				{...props}
				className={style(classes.root, className)}
			>
				<ul
					className={classes.list}
				>
					{Children.map(children, child => child && (
						<li
							className={classes.item}
						>
							{child}
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
