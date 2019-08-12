import React, {
	ReactElement,
	PureComponent,
	Children,
	cloneElement
} from 'react';
import stylesheet from './WeatherList.st.css';

export interface IProps {
	children: ReactElement<any>[];
}

export default class WeatherList extends PureComponent<IProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<ul
				{...stylesheet('root', {}, props)}
			>
				{Children.map(children, (child: ReactElement<any>) => child && (
					<li
						{...stylesheet('item')}
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
