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
import {
	style,
	classes
} from './Modal.st.css';

export type IProps = IFlexisModalProps;

export default class Modal extends Component<IProps> {

	static propTypes = FlexisModal.propTypes;

	static defaultProps = {
		...FlexisModal.defaultProps,
		transitionDuration: 200
	};

	private unsubscribeHeaderClick: () => void = null;

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<FlexisModal
				{...props}
				className={style(classes.root, className)}
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

		const headerClickSubscribed = typeof this.unsubscribeHeaderClick === 'function';

		if (active) {

			const header = document.querySelector('header');

			if (!headerClickSubscribed && header) {
				this.unsubscribeHeaderClick = subscribeEvent(
					header,
					'click',
					this.onHeaderClick
				);
			}
		} else
		if (headerClickSubscribed) {
			this.unsubscribeHeaderClick();
			this.unsubscribeHeaderClick = null;
		}
	}

	private removeEffects() {

		if (typeof this.unsubscribeHeaderClick === 'function') {
			this.unsubscribeHeaderClick();
			this.unsubscribeHeaderClick = null;
		}
	}
}
