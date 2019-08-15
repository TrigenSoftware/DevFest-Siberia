import React, {
	HTMLAttributes,
	Component
} from 'react';
import stylesheet from './Brands.st.css';

export type IBrandsTitleProps = HTMLAttributes<HTMLHeadingElement>;

export class BrandsTitle extends Component<IBrandsTitleProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<h3
				{...props}
				{...stylesheet('title', {}, props)}
			>
				{children}
			</h3>
		);
	}
}
