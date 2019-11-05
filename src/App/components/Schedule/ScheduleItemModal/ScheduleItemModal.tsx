import React, {
	Component
} from 'react';
import Modal, {
	IProps as IModalProps
} from '../../Modal';
import {
	style,
	classes
} from './ScheduleItemModal.st.css';

export type IProps = IModalProps;

export class ScheduleItemModal extends Component<IProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<Modal
				{...props}
				className={style(classes.root, className)}
				centered
			>
				{children}
			</Modal>
		);
	}
}
