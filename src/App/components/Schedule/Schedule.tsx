import React, {
	TableHTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './Schedule.st.css';

export * from './ScheduleItem';

export type IProps = TableHTMLAttributes<HTMLTableElement>;

export default class Schedule extends Component<IProps> {

	render() {

		const {
			className,
			children
		} = this.props;

		return (
			<table
				className={style(classes.root, className)}
			>
				<tbody>
					{children}
				</tbody>
			</table>
		);
	}
}
