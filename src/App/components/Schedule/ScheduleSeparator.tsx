/* tslint:disable:no-magic-numbers */
import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	classes
} from './Schedule.st.css';

export type IScheduleSeparatorProps = HTMLAttributes<HTMLTableRowElement>;

export class ScheduleSeparator extends Component<IScheduleSeparatorProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<tr
				{...props}
				className={classes.separator}
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
