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
	omit
} from '@flexis/ui/helpers';
import ConfirmModal, {
	IProps as IConfirmModalProps
} from '~/components/ConfirmModal';
import {
	routeProps,
	deleteSearchParams
} from '../common';

type IPaidMessageModalProps = Omit<IConfirmModalProps, 'children'>;

export interface IProps extends IPaidMessageModalProps, RouteComponentProps {}

export class PaidMessageModal extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	confirmRef = null;

	render() {

		const {
			...props
		} = this.props;

		return (
			<ConfirmModal
				{...omit(props, routeProps)}
				elementRef={(ref) => {
					this.confirmRef = ref;
				}}
			>
				{__x`confirm.message`}
			</ConfirmModal>
		);
	}

	async componentDidMount() {

		const {
			props
		} = this;
		const {
			history,
			location: {
				search
			}
		} = props;

		const searchWithParam = /[^\w]paid=/.test(search);

		if (searchWithParam) {
			await this.confirmRef.show();

			history.push({
				search: deleteSearchParams(search, 'paid')
			});
		}
	}
}

export default withRouter(PaidMessageModal);
