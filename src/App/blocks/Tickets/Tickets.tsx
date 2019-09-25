import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	getTickets
} from '~/services/i18n';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import TicketPreview, {
	TickerPreviewPrimary,
	TicketPreviewAuxiliary,
	TicketPreviewPrice,
	TicketPreviewSale,
	TicketPreviewButton,
	TicketPreviewDescription
} from '~/components/TicketPreview';
import {
	style,
	classes
} from './Tickets.st.css';

export type IProps = ISectionProps;

export default class Tickets extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			...props
		} = this.props;
		const {
			context
		} = this;
		const tickets = getTickets(context);

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<ul
					className={classes.list}
				>
					{tickets.map(item => (
						<li
							key={item.type}
						>
							<TicketPreview
								className={classes.ticket}
								vertical
							>
								<TickerPreviewPrimary>
									<TicketPreviewPrice>
										{item.price}
									</TicketPreviewPrice>
									<TicketPreviewSale>
										{item.sale}
									</TicketPreviewSale>
									<div
										className={classes.priceType}
									>
										{item.priceType}
									</div>
									<TicketPreviewButton
										to='/buy'
									>
										{item.buy}
									</TicketPreviewButton>
									<TicketPreviewDescription>
										{item.description}
									</TicketPreviewDescription>
								</TickerPreviewPrimary>
								<TicketPreviewAuxiliary>
									{item.type}
								</TicketPreviewAuxiliary>
							</TicketPreview>
						</li>
					))}
				</ul>
				<div
					className={classes.сontact}
				>
					<div
						className={classes.circle}
					/>
					<div
						className={classes.circle}
					/>
					<div
						className={classes.circle}
					/>
					<div
						className={classes.circle}
					/>
					<div
						className={classes.content}
					>
						<div
							className={classes.circle}
						/>
						<div
							className={classes.circle}
						/>
						<div
							className={classes.circle}
						/>
						<div
							className={classes.circle}
						/>
						<h3>
							{__x`tickets.сontact`}
						</h3>
					</div>
				</div>
			</Section>
		);
	}
}
