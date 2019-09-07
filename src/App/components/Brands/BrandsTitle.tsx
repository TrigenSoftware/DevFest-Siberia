import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './Brands.st.css';

export type IBrandsTitleProps = HTMLAttributes<HTMLHeadingElement>;

export class BrandsTitle extends Component<IBrandsTitleProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<h3
				{...props}
				className={style(classes.title, className)}
			>
				{children}
			</h3>
		);
	}
}
