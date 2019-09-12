import React, {
	Component
} from 'react';
import {
	default as Slider,
	CarouselProps
} from 'nuka-carousel';
import {
	style,
	classes
} from './Carousel.st.css';

export type IProps = CarouselProps;

export default class Carousel extends Component<IProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<Slider
				{...props}
				className={style(classes.root, className)}
			>
				{children}
			</Slider>
		);
	}
}
