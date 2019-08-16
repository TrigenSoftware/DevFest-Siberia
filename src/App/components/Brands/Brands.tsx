import React, {
	HTMLAttributes,
	Component
} from 'react';
import stylesheet from './Brands.st.css';

export * from './BrandsTitle';
export * from './BrandsRow';
export * from './BrandsItem';

export type IProps = HTMLAttributes<HTMLDivElement>;

export default class Brands extends Component<IProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				{...stylesheet('root', {}, props)}
			>
				{children}
			</div>
		);
	}
}
