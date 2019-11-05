import React, {
	Component
} from 'react';
import Modal, {
	IProps as IModalProps
} from '../../Modal';

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
				centered
			>
				{children}
			</Modal>
		);
	}
}
