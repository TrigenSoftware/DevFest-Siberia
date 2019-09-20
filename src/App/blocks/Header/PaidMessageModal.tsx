import React, {
	ContextType,
	Component
} from 'react';
import {
	RouteComponentProps,
	withRouter
} from 'react-router-dom';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	Bind,
	Debounce,
	omit
} from '@flexis/ui/helpers';
import Modal from '~/components/Modal';
import ConfirmModal, {
	IProps as IConfirmModalProps
} from '~/components/ConfirmModal';
import {
	routeProps,
	deleteSearchParams
} from '../common';

type IPaidMessageModalProps = Omit<IConfirmModalProps, 'children'>;

export interface IProps extends IPaidMessageModalProps, RouteComponentProps {}

interface IState {
	active: boolean;
	prevSearch: string;
}

const {
	transitionDuration
} = Modal.defaultProps;

export class PaidMessageModal extends Component<IProps, IState> {

	static contextType = I18nContext;

	static getDerivedStateFromProps(
		{
			location: {
				search
			}
		}: IProps,
		{
			prevSearch
		}: IState
	) {

		if (prevSearch === search) {
			return null;
		}

		const searchWithParam = /[^\w]paid=/.test(search);
		const nextState: Partial<IState> = {
			active:     searchWithParam,
			prevSearch: search
		};

		return nextState;
	}

	state = {
		active:     false,
		prevSearch: ''
	};

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			...props
		} = this.props;
		const {
			active
		} = this.state;

		return (
			<ConfirmModal
				{...omit(props, routeProps)}
				onClose={this.onClose}
				active={active}
			>
				{__x`confirm.message`}
			</ConfirmModal>
		);
	}

	@Bind()
	private onClose() {
		this.setState(() => ({
			active: false
		}), this.goBack);
	}

	@Debounce(transitionDuration)
	private goBack() {

		const {
			props
		} = this;
		const {
			history,
			location: {
				search
			}
		} = props;

		history.push({
			search: deleteSearchParams(search, 'paid')
		});
	}
}

export default withRouter(PaidMessageModal);
