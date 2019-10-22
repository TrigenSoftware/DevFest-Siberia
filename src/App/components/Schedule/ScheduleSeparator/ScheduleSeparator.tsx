/* tslint:disable:no-magic-numbers */
import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './ScheduleSeparator.st.css';

export type IScheduleSeparatorProps = HTMLAttributes<HTMLTableRowElement>;

export class ScheduleSeparator extends Component<IScheduleSeparatorProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<tr
				{...props}
				className={style(classes.root, className)}
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
