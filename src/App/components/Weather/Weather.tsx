import React, {
	PureComponent
} from 'react';
import {
	style,
	classes
} from './Weather.st.css';

export interface IProps {
	className?: string;
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
			className,
			size,
			date,
			temp,
			description,
			humidity,
			clouds,
			precipitation
		} = this.props;

		return (
			<div
				className={style(classes.root, {
					[`${size}Size`]: Boolean(size)
				}, className)}
			>
				{size && (
					<div
						className={classes.date}
					>
						{date}
					</div>
				)}
				<div
					className={classes.temp}
				>
					{temp}
					<sup>&#8451;</sup>
				</div>
				<div
					className={classes.description}
				>
					{description}
				</div>
				<ul
					className={classes.params}
				>
					<li
						className={classes.param}
					>
						Humidity: {humidity}%
					</li>
					<li
						className={classes.param}
					>
						Cloudiness: {clouds}%
					</li>
					<li
						className={classes.param}
					>
						Recipitation: {precipitation}
					</li>
				</ul>
			</div>
		);
	}
}
