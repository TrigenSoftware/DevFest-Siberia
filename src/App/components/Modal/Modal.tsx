import React, {
	Component
} from 'react';
import FlexisModal, {
	IProps as IFlexisModalProps
} from '@flexis/ui/components/Modal';
import stylesheet from './Modal.st.css';

export type IProps = IFlexisModalProps;

export default class Modal extends Component<IProps> {

	static propTypes = FlexisModal.propTypes;

	static defaultProps = {
		...FlexisModal.defaultProps,
		transitionDuration: 200
	};

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<FlexisModal
				{...props}
				{...stylesheet('root', {}, props)}
			>
				{children}
			</FlexisModal>
		);
	}

	componentDidMount() {

		const header = document.querySelector('header');
		const {
			onClose
		} = this.props;

		if (header) {
			header.addEventListener('click', onClose as any);
		}
	}
}
