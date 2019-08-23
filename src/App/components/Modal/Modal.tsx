import React, {
	Component, SyntheticEvent
} from 'react';
import {
	subscribeEvent,
	Bind
} from '@flexis/ui/helpers';
import toggleScrollBlock from '@flexis/ui/components/common/toggleScrollBlock';
import toggleAriaHide from '@flexis/ui/components/common/toggleAriaHide';
import FlexisModal, {
	IProps as IFlexisModalProps
} from '@flexis/ui/components/Modal';
import stylesheet from './Modal.st.css';

export type IProps = IFlexisModalProps;

let appElement = null;

export function setAppElement(appElementSource) {
	appElement = typeof appElementSource === 'string'
		? document.querySelector(appElementSource)
		: appElementSource;
}

export default class Modal extends Component<IProps> {

	static propTypes = FlexisModal.propTypes;

	static defaultProps = {
		...FlexisModal.defaultProps,
		transitionDuration: 200
	};

	private unblockScroll: () => void = null;
	private unsubscribeKeyDown: () => void = null;
	private ariaShow: () => void = null;

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
	private onHeaderClick(event: SyntheticEvent) {

		const {
			onClose
		} = this.props;

		if (typeof onClose === 'function') {
			onClose(event);
		}
	}

	private toggleEffects() {

		const {
			active
		} = this.props;

		this.unblockScroll = toggleScrollBlock(
			active,
			this.unblockScroll
		);

		if (appElement) {
			this.ariaShow = toggleAriaHide(
				active,
				this.ariaShow,
				appElement
			);
		}

		const keyDownSubscribed = typeof this.unsubscribeKeyDown === 'function';

		if (active) {

			const header = document.querySelector('header');

			if (!keyDownSubscribed && header) {
				this.unsubscribeKeyDown = subscribeEvent(
					header,
					'click',
					this.onHeaderClick
				);
			}
		} else
		if (keyDownSubscribed) {
			this.unsubscribeKeyDown();
			this.unsubscribeKeyDown = null;
		}
	}

	private removeEffects() {

		if (typeof this.unblockScroll === 'function') {
			this.unblockScroll();
			this.unblockScroll = null;
		}

		if (typeof this.ariaShow === 'function') {
			this.ariaShow();
			this.ariaShow = null;
		}

		if (typeof this.unsubscribeKeyDown === 'function') {
			this.unsubscribeKeyDown();
			this.unsubscribeKeyDown = null;
		}
	}
}
