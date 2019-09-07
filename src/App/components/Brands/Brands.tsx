import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './Brands.st.css';

export * from './BrandsTitle';
export * from './BrandsRow';
export * from './BrandsItem';

export type IProps = HTMLAttributes<HTMLDivElement>;

export default class Brands extends Component<IProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				className={style(classes.root, className)}
			>
				{children}
			</div>
		);
	}
}
