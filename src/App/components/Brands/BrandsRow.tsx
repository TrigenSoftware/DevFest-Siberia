import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './Brands.st.css';

export type IBrandsRowProps = HTMLAttributes<HTMLDivElement>;

export class BrandsRow extends Component<IBrandsRowProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				className={style(classes.row, className)}
			>
				{children}
			</div>
		);
	}
}
