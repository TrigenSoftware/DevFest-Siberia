import React, {
	Component
} from 'react';
import ToggleNav, {
	IProps as IToggleNavProps
} from '../ToggleNav';
import {
	style,
	classes
} from './TabsNav.st.css';

export * from './TabsNavItem';

export type IProps = IToggleNavProps;

export default class TabsNav extends Component<IProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<ToggleNav
				{...props}
				className={style(classes.root, className)}
			>
				{children}
			</ToggleNav>
		);
	}
}
