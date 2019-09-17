import React, {
	Component
} from 'react';
import Modal, {
	IProps as IModalProps
} from '../Modal';
import {
	style,
	classes
} from './LoginModal.st.css';

export * from './LoginModalForm';
export * from './LoginModalTitle';
export * from './LoginModalFooter';
export * from './LoginModalLink';

export type IProps = IModalProps;

export default class LoginModal extends Component<IProps> {

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
