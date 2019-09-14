import React, {
	Component
} from 'react';
import Checkbox, {
	IProps as ICheckboxProps
} from '../../Checkbox';
import {
	style,
	classes
} from './TicketFormCheckbox.st.css';

export type ITicketFormCheckboxProps = ICheckboxProps;

export class TicketFormCheckbox extends Component<ITicketFormCheckboxProps> {

	render() {

		const {
			className,
			id,
			children,
			...props
		} = this.props;

		return (
			<>
				<Checkbox
					{...props}
					className={style(classes.root, className)}
					id={id}
				/>
				<label
					className={classes.label}
					htmlFor={id}
				>
					{children}
				</label>
			</>
		);
	}
}
