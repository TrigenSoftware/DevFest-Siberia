import React, {
	ContextType,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
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
		fetchOrders: PropTypes.func.isRequired
	};

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			...props
		} = this.props;
		const {
			context
		} = this;
		const __ = context.bind(tr);

		return (
			<Section
				{...omit(props, routeProps)}
				className={style(classes.root, className)}
			>
				<h2>
					{__x`cabinet.title`}
				</h2>
				<article
					className={classes.article}
				>
					<TicketPreview
						className={classes.ticket}
					>
						<TickerPreviewPrimary>
							<TickerPreviewGroup>
								<TickerPreviewField
									label={__`cabinet.id`}
									value='ID 123123'
								/>
								<TickerPreviewField
									label={__`cabinet.for`}
									value='Jhon Doe'
								/>
							</TickerPreviewGroup>
							<TickerPreviewGroup>
								<TickerPreviewField
									label={__`cabinet.where`}
									value='Academ, 18'
								/>
								<TickerPreviewField
									label={__`cabinet.when`}
									value='29 ноября – 1 декабря'
								/>
							</TickerPreviewGroup>
						</TickerPreviewPrimary>
						<TicketPreviewAuxiliary>
							{__x`cabinet.ticket`}
						</TicketPreviewAuxiliary>
					</TicketPreview>
				</article>
			</Section>
		);
	}

	componentDidMount() {

		const {
			fetchOrders
		} = this.props;

		fetchOrders();
	}
}
