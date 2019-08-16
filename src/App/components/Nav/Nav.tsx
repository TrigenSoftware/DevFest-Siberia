import React, {
	HTMLAttributes,
	MouseEvent,
	Component
} from 'react';
import {
	Bind
} from '@flexis/ui/helpers';
import BurgerButton from '../BurgerButton';
import stylesheet from './Nav.st.css';

export * from './NavLink';

export type IProps = HTMLAttributes<HTMLElement>;

interface IState {
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
					onClick={this.onLinkClick}
				>
					{children}
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

	@Bind()
	private onLinkClick(event: MouseEvent<HTMLUListElement>) {

		if ((event.target as HTMLElement).tagName === 'A') {
			this.onClick();
		}
	}
}
