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
		isLogged:    PropTypes.func.isRequired
	};

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			user,
			order,
			...props
		} = this.props;
		const {
			context
		} = this;
		const __ = context.bind(tr);
		let tickets = [];

		if (order) {
			tickets = order.toJS().items;
		}

		return (
			<Section
				{...omit(props, [
					...routeProps,
					'fetchOrders',
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
					{tickets.map(ticket => (
						<TicketPreview
							className={classes.ticket}
							key={ticket.ticket.ticketUID}
						>
							<TickerPreviewPrimary>
								<TickerPreviewGroup>
									<TickerPreviewField
										label={__`cabinet.id`}
										value={ticket.ticket.ticketUID}
									/>
									<TickerPreviewField
										label={__`cabinet.for`}
										value='Jhon Doe'
									/>
								</TickerPreviewGroup>
								<TickerPreviewGroup>
									<TickerPreviewField
										label={__`cabinet.where`}
										value={__`cabinet.location`}
									/>
									<TickerPreviewField
										label={__`cabinet.when`}
										value='29 ноября – 1 декабря'
									/>
								</TickerPreviewGroup>
							</TickerPreviewPrimary>
							<TicketPreviewAuxiliary>
								{ticket.productName}
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
			fetchOrders,
			isLogged
		} = this.props;
		const {
			context
		} = this;

		if (isLogged()) {
			fetchOrders();
		} else {
			history.push(getLocalizedPath(context, '/'));
		}
	}
}

export default withRouter(CabinetContainer);
