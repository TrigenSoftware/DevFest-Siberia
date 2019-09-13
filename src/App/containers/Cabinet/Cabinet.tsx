import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import TicketPreview, {
	TickerPreviewPrimary,
	TickerPreviewGroup,
	TickerPreviewField,
	TicketPreviewAuxiliary
} from '~/components/TicketPreview';
import {
	style,
	classes
} from './Cabinet.st.css';

export type IProps = ISectionProps;

export default class CabinetContainer extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			...props
		} = this.props;

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<h2>
					{__x`cabinet.title`}
				</h2>
				<article
					className={classes.article}
				>
					<TicketPreview>
						<TickerPreviewPrimary>
							<TickerPreviewGroup>
								<TickerPreviewField
									label='Номер Билета'
									value='ID 123123'
								/>
								<TickerPreviewField
									label='Для'
									value='Jhon Doe'
								/>
							</TickerPreviewGroup>
							<TickerPreviewGroup>
								<TickerPreviewField
									label='Где'
									value='Academ, 18'
								/>
								<TickerPreviewField
									label='Когда'
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
}
