import React, {
	Component
} from 'react';
import {
	subscribeEvent,
	Bind
} from '@flexis/ui/helpers';
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

	private headerClick: () => void = null;

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
		this.toggleEffects();
	}

	componentWillUnmount() {
		this.removeEffects();
	}

	componentDidUpdate({ active: prevActive }: IProps) {

		const {
			active
		} = this.props;

		if (prevActive !== active) {
			this.toggleEffects();
		}
	}

	@Bind()
	private onHeaderClick(event: MouseEvent) {

		const {
			onClose
		} = this.props;

		if (typeof onClose === 'function') {
			onClose(event as any);
		}
	}

	private toggleEffects() {

		const {
			active
		} = this.props;

		const clickSubscribed = typeof this.headerClick === 'function';

		if (active) {

			const header = document.querySelector('header');

			if (!clickSubscribed && header) {
				this.headerClick = subscribeEvent(
					header,
					'click',
					this.onHeaderClick
				);
			}
		} else
		if (clickSubscribed) {
			this.headerClick();
			this.headerClick = null;
		}
	}

	private removeEffects() {

		if (typeof this.headerClick === 'function') {
			this.headerClick();
			this.headerClick = null;
		}
	}
}
