import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import TicketPreview, {
	TickerPreviewPrimary,
	TickerPreviewGroup,
	TickerPreviewField,
	TicketPreviewAuxiliary
} from './';

const stylableApi = `
Stylable API
---
`;

storiesOf('Components|TicketPreview', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with content',
		() => (
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
					Один Билет
				</TicketPreviewAuxiliary>
			</TicketPreview>
		)
	);
