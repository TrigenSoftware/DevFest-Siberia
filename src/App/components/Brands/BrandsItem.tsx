import React, {
	Component
} from 'react';
import Link, {
	IProps as ILinkProps
} from '../Link';
import stylesheet from './Brands.st.css';

export interface IBrandsItemProps extends ILinkProps {
	src: string;
}

export class BrandsItem extends Component<IBrandsItemProps> {

	render() {

		const {
			href,
			src,
			title,
			children,
			...props
		} = this.props;

		return (
			<Link
				{...props}
				{...stylesheet('item', {}, props)}
				href={href}
				target='_blank'
			>
				<img
					{...stylesheet('img')}
					src={src}
					title={title}
				/>
			</Link>
		);
	}
}
