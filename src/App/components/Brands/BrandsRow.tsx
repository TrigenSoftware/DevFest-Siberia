import React, {
	HTMLAttributes,
	Component
} from 'react';
import stylesheet from './Brands.st.css';

export type IBrandsRowProps = HTMLAttributes<HTMLDivElement>;

export class BrandsRow extends Component<IBrandsRowProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				{...stylesheet('row', {}, props)}
			>
				{children}
			</div>
		);
	}
}
