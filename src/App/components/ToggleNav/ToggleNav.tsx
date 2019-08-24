import React, {
	HTMLAttributes,
	Children,
	Component
} from 'react';
import stylesheet from './ToggleNav.st.css';

export * from './ToggleNavLink';

export type IProps = HTMLAttributes<HTMLElement>;

export default class ToggleNav extends Component<IProps> {

	render() {

		const {
			color,
			children,
			...props
		} = this.props;

		return (
			<nav
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<ul
					{...stylesheet('list')}
				>
					{Children.map(children, child => child && (
						<li
							{...stylesheet('item')}
						>
							{child}
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
