/* tslint:disable jsx-no-lambda */
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
	omit
} from '@flexis/ui/helpers';
import ConfirmModal, {
	IProps as IConfirmModalProps
} from '~/components/ConfirmModal';
import {
	routeProps,
	deleteSearchParams
} from '../common';

let confirmRef = null;

type IPaidMessageModalProps = Omit<IConfirmModalProps, 'children'>;

export interface IProps extends IPaidMessageModalProps, RouteComponentProps {}

export class PaidMessageModal extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			...props
		} = this.props;

		return (
			<ConfirmModal
				{...omit(props, routeProps)}
				elementRef={(ref) => {
					confirmRef = ref;
				}}
				onClose={this.onClose}
			>
				{__x`confirm.message`}
			</ConfirmModal>
		);
	}

	componentDidMount() {

		const {
			search
		} = this.props.location;

		const searchWithParam = /[^\w]paid=/.test(search);

		if (searchWithParam) {
			confirmRef.show();
		} else {
			confirmRef.hide();
		}
	}

	@Bind()
	private onClose() {

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
