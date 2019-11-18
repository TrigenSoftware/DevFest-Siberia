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
	getLocalizedPath,
	getCabinetTypes
} from '~/services/i18n';
import Section from '~/components/Section';
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
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
		fetchOrders:  PropTypes.func.isRequired,
		fetchProfile: PropTypes.func.isRequired,
		isLogged:     PropTypes.func.isRequired
	};

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			isLogged
		} = this.props;
		const {
			context
		} = this;
		const nav = getCabinetTypes(context);

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
				<ToggleNav
					className={classes.nav}
				>
					{nav.map(({
						type,
						label
					}) => (
						<ToggleNavLink
							key={type}
							to={type === 'ticket' ? '/cabinet' : `/cabinet?type=${type}`}
						>
							{label}
						</ToggleNavLink>
					))}
				</ToggleNav>
				<article
					className={classes.article}
				>
					{this.renderContent()}
				</article>
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

	private renderContent() {

		const {
			user,
			order,
			location: {
				search
			}
		} = this.props;
		const {
			context
		} = this;
		const __ = context.bind(tr);
		const type = new URLSearchParams(search).get('type');

		switch (type) {

			case 'favorites':
				return (
					<div>Empty</div>
				);

			case 'workshops':
				return (
					<div>Empty</div>
				);

			default:
				return (user && order && order.items.map(({
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
										value={__`cabinet.date`}
									/>
								</TickerPreviewGroup>
							</TickerPreviewPrimary>
							<TicketPreviewAuxiliary>
								{productName}
							</TicketPreviewAuxiliary>
						</TicketPreview>
					)
				));
		}
	}
}

export default withRouter(CabinetContainer);
