/* tslint:disable:no-magic-numbers */
import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './Schedule.st.css';

export type IScheduleDateProps = HTMLAttributes<HTMLTableRowElement>;

export class ScheduleDate extends Component<IScheduleDateProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<tr
				{...props}
				className={classes.date}
			>
				<td
					colSpan={3}
				>
					{children}
				</td>
			</tr>
		);
	}
}
