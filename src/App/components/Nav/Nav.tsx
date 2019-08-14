import React, {
	HTMLAttributes,
	Children,
	Component
} from 'react';
import {
	Bind
} from '@flexis/ui/helpers';
import BurgerButton from '../BurgerButton';
import stylesheet from './Nav.st.css';

export * from './NavLink';

export type IProps = HTMLAttributes<HTMLElement>;

export interface IState {
	active: boolean;
}

export default class Nav extends Component<IProps, IState> {

	state = {
		active: false
	};

	render() {

		const {
			children,
			...props
		} = this.props;
		const {
			active
		} = this.state;

		return (
			<nav
				{...props}
				{...stylesheet('root', {
					active
				}, props)}
			>
				<BurgerButton
					{...stylesheet('toggle')}
					onClick={this.onClick}
					active={active}
				/>
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
				<button
					{...stylesheet('close')}
					onClick={this.onClick}
				/>
			</nav>
		);
	}

	@Bind()
	private onClick() {
		this.setState(({
			active
		}) => ({
			active: !active
		}));
	}
}
