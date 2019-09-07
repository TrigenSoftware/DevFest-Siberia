import React, {
	ReactElement,
	PureComponent,
	Children,
	cloneElement
} from 'react';
import {
	style,
	classes
} from './WeatherList.st.css';

export interface IProps {
	className?: string;
	children: ReactElement<any>[];
}

export default class WeatherList extends PureComponent<IProps> {

	render() {

		const {
			className,
			children
		} = this.props;

		return (
			<ul
				className={style(classes.root, className)}
			>
				{Children.map(children, (child: ReactElement<any>) => child && (
					<li
						className={classes.item}
					>
						{cloneElement(child, {
							size: 'sm'
						})}
					</li>
				))}
			</ul>
		);
	}
}
