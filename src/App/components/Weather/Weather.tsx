import React, {
	PureComponent
} from 'react';
import stylesheet from './Weather.st.css';

export interface IProps {
	size?: 'sm';
	date: string;
	temp: number;
	description: string;
	humidity: number;
	clouds: number;
	precipitation: number;
}

export default class Weather extends PureComponent<IProps> {

	render() {

		const {
			size,
			date,
			temp,
			description,
			humidity,
			clouds,
			precipitation,
			...props
		} = this.props;

		return (
			<div
				{...stylesheet('root', {
					[`${size}Size`]: size
				}, props)}
			>
				{size && (
					<div
						{...stylesheet('date')}
					>
						{date}
					</div>
				)}
				<div
					{...stylesheet('temp')}
				>
					{temp}
					<sup>&#8451;</sup>
				</div>
				<div
					{...stylesheet('description')}
				>
					{description}
				</div>
				<ul
					{...stylesheet('params')}
				>
					<li
						{...stylesheet('param')}
					>
						Humidity: {humidity}%
					</li>
					<li
						{...stylesheet('param')}
					>
						Cloudiness: {clouds}%
					</li>
					<li
						{...stylesheet('param')}
					>
						Recipitation: {precipitation}
					</li>
				</ul>
			</div>
		);
	}
}
