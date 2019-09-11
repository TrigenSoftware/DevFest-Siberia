import React, {
	Component
} from 'react';
import Link, {
	IProps as ILinkProps
} from '../Link';
import {
	style,
	classes
} from './Brands.st.css';

export interface IBrandsItemProps extends ILinkProps {
	src: string;
}

export class BrandsItem extends Component<IBrandsItemProps> {

	render() {

		const {
			className,
			href,
			src,
			title,
			children,
			...props
		} = this.props;

		return (
			<Link
				{...props}
				className={style(classes.item, className)}
				href={href}
				target='_blank'
			>
				<img
					className={classes.img}
					src={src}
					title={title}
					loading='lazy'
				/>
			</Link>
		);
	}
}
