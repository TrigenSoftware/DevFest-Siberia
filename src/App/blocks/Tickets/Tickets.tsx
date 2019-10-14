import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__ as tr,
	__x,
	rprintf
} from 'i18n-for-react';
import {
	getTickets
} from '~/services/i18n';
import Link from '~/components/Link';
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

const priceType = [
	<b key='bold'/>,
	<span key='highlight'/>
];

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
		const __ = context.bind(tr);
		const email = __`tickets.contactEmail`;

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
										{rprintf(item.priceType, priceType)}
									</div>
									<TicketPreviewButton
										to='/buy'
										disabled={item.soldOut && true}
									>
										{item.soldOut
											? item.sold
											: item.buy
										}
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
						className={classes.line}
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
						{__x('tickets.сontact', email, [(
							<Link
								key='contact'
								href={`mailto:${email}`}
							/>
						)])}
					</div>
				</div>
			</Section>
		);
	}
}
