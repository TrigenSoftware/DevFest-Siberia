import React, {
	ContextType,
	Component
} from 'react';
import {
	withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
import {
	getLocalizedPath
} from '~/services/i18n';
import {
	omit
} from '@flexis/ui/helpers';
import {
	routeProps
} from '~/blocks/common/router';
import Section from '~/components/Section';
import TicketPreview, {
	TickerPreviewPrimary,
	TickerPreviewGroup,
	TickerPreviewField,
	TicketPreviewAuxiliary
} from '~/components/TicketPreview';
import {
	IProps
} from './types';
import {
	style,
	classes
} from './Cabinet.st.css';

export class CabinetContainer extends Component<IProps> {

	static contextType = I18nContext;

	static propTypes = {
		fetchOrders: PropTypes.func.isRequired,
		getProfile:  PropTypes.func.isRequired,
		isLogged:    PropTypes.func.isRequired
	};

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			user,
			order,
			isLogged,
			...props
		} = this.props;
		const {
			context
		} = this;
		const __ = context.bind(tr);

		if (!isLogged()) {
			return null;
		}

		return (
			<Section
				{...omit(props, [
					...routeProps,
					'fetchOrders',
					'getProfile',
					'isLogged'
				])}
				className={style(classes.root, className)}
			>
				<h2>
					{__x`cabinet.title`}
				</h2>
				<article
					className={classes.article}
				>
					{user && order && order.items.map(({
						ticket,
						productName
					}) => (
						<TicketPreview
							className={classes.ticket}
							key={ticket.ticketUID}
						>
							<TickerPreviewPrimary>
								<TickerPreviewGroup>
									<TickerPreviewField
										label={__`cabinet.id`}
										value={ticket.ticketUID}
									/>
									<TickerPreviewField
										label={__`cabinet.for`}
										value={`${user.firstname} ${user.lastname}`}
									/>
								</TickerPreviewGroup>
								<TickerPreviewGroup>
									<TickerPreviewField
										label={__`cabinet.where`}
										value={__`cabinet.location`}
									/>
									<TickerPreviewField
										label={__`cabinet.when`}
										value={__`cabinet.data`}
									/>
								</TickerPreviewGroup>
							</TickerPreviewPrimary>
							<TicketPreviewAuxiliary>
								{productName}
							</TicketPreviewAuxiliary>
						</TicketPreview>
					))}
				</article>
			</Section>
		);
	}

	componentDidMount() {

		const {
			history,
			getProfile,
			fetchOrders,
			isLogged
		} = this.props;
		const {
			context
		} = this;

		if (isLogged()) {
			fetchOrders();
			getProfile();
		} else {
			history.push(getLocalizedPath(context, '/'));
		}
	}
}

export default withRouter(CabinetContainer);
