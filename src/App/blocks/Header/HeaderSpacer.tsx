import React, {
	LiHTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './Header.st.css';

export type IProps = LiHTMLAttributes<HTMLLIElement>;

export class HeaderSpacer extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<li
				{...props}
				className={classes.spacer}
			/>
		);
	}
}
