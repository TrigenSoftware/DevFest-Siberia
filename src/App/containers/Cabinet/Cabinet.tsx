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
	Bind
} from '@flexis/ui/helpers';
import {
	getLocalizedPath
} from '~/services/i18n';
import Section from '~/components/Section';
import TicketPreview, {
	TickerPreviewPrimary,
	TicketPreviewSecondary,
	TickerPreviewGroup,
	TickerPreviewField,
	TicketPreviewAuxiliary
} from '~/components/TicketPreview';
import Button from '~/components/Button';
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
		fetchOrders:                 PropTypes.func.isRequired,
		fetchProfile:                PropTypes.func.isRequired,
		selectTicketOrder:           PropTypes.func.isRequired,
		selectAfterpartyTicketOrder: PropTypes.func.isRequired,
		isLogged:                    PropTypes.func.isRequired
	};

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			user,
			orders,
			selectTicketOrder,
			selectAfterpartyTicketOrder,
			isLogged
		} = this.props;
		const {
			context
		} = this;
		const __ = context.bind(tr);
		const order = selectTicketOrder(orders);
		const afterparty = selectAfterpartyTicketOrder(orders);

		if (!isLogged()) {
			return null;
		}

		return (
			<Section
				className={style(classes.root, className)}
			>
				<h2>
					{__x`cabinet.title`}
				</h2>
				<article
					className={classes.article}
				>
					{user && order && (
						<TicketPreview
							className={classes.ticket}
							key={order.ticket.ticketUID}
						>
							<TickerPreviewPrimary>
								<TickerPreviewGroup>
									<TickerPreviewField
										label={__`cabinet.id`}
										value={order.ticket.ticketUID}
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
										value={__`cabinet.date`}
									/>
								</TickerPreviewGroup>
							</TickerPreviewPrimary>
							{afterparty && (
								<TicketPreviewSecondary>
									{__x`cabinet.afterpartyTitle`}
								</TicketPreviewSecondary>
							)}
							<TicketPreviewAuxiliary>
								{order.productName}
							</TicketPreviewAuxiliary>
						</TicketPreview>
					)}
				</article>
				<footer
					className={classes.footer}
				>
					{!afterparty && (
						<Button
							onClick={this.buyAfterpartyTicket}
						>
							{__x`cabinet.buyAfterparty`}
						</Button>
					)}
				</footer>
			</Section>
		);
	}

	componentDidMount() {

		const {
			history,
			fetchProfile,
			fetchOrders,
			isLogged
		} = this.props;
		const {
			context
		} = this;

		if (isLogged()) {
			fetchOrders();
			fetchProfile();
		} else {
			history.push(getLocalizedPath(context, '/'));
		}
	}

	@Bind()
	private buyAfterpartyTicket() {

		const {
			buyAfterpartyTicket
		} = this.props;
		const {
			context
		} = this;
		const locale = context.getLocale();

		buyAfterpartyTicket(locale);
	}
}

export default withRouter(CabinetContainer);
