import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import FlexisConfirmModal, {
	IProps as IFlexisConfirmModal
} from '@flexis/ui/components/ConfirmModal';
import {
	style as modalStyle,
	classes as modalClasses
} from '../Modal/Modal.st.css';
import {
	style,
	classes
} from './ConfirmModal.st.css';

export interface IProps extends IFlexisConfirmModal {
	elementRef?: any;
}

export default class ConfirmModal extends Component<IProps> {

	static propTypes = {
		...FlexisConfirmModal.propTypes,
		elementRef: PropTypes.func
	};

	static defaultProps = {
		...FlexisConfirmModal.defaultProps,
		transitionDuration: 200
	};

	render() {

		const {
			className,
			elementRef,
			children,
			...props
		} = this.props;
		const modalProps = modalStyle(modalClasses.root);

		return (
			<FlexisConfirmModal
				ref={elementRef}
				{...props}
				className={style(classes.root, modalProps)}
			>
				{children}
			</FlexisConfirmModal>
		);
	}
}
