import React, {
	HTMLAttributes,
	Children,
	Component
} from 'react';
import {
	style,
	classes
} from './Schedule.st.css';

export * from './ScheduleItem';

export type IProps = HTMLAttributes<HTMLDivElement>;

export default class Schedule extends Component<IProps> {

	render() {

		const {
			className,
			children
		} = this.props;

		return (
			<div
				className={style(classes.root, {}, className)}
			>
				<ul
					className={classes.list}
				>
					{Children.map(children, child => child && (
						<li
							className={classes.item}
						>
							{child}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
