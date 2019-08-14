import React, {
	HTMLAttributes,
	Children,
	Component
} from 'react';
import stylesheet from './Nav.st.css';

export * from './NavLink';

export type IProps = HTMLAttributes<HTMLElement>;

export default class Nav extends Component<IProps> {

	render() {

		const {
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
						<li>
							{child}
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
