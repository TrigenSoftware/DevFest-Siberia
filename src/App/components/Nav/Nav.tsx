import React, {
	HTMLAttributes,
	MouseEvent,
	Component
} from 'react';
import {
	Bind
} from '@flexis/ui/helpers';
import BurgerButton from '../BurgerButton';
import {
	style,
	classes
} from './Nav.st.css';

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
			className,
			children,
			...props
		} = this.props;
		const {
			active
		} = this.state;

		return (
			<nav
				{...props}
				className={style(classes.root, {
					active
				}, className)}
			>
				<BurgerButton
					className={classes.toggle}
					onClick={this.onClick}
					active={active}
				/>
				<ul
					className={classes.list}
					onClick={this.onLinkClick}
				>
					{children}
				</ul>
				<button
					className={classes.close}
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
