import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import TicketPreview, {
	TickerPreviewPrimary,
	TickerPreviewGroup,
	TickerPreviewField,
	TicketPreviewAuxiliary,
	TicketPreviewPrice,
	TicketPreviewSale,
	TicketPreviewButton,
	TicketPreviewDescription
} from './';

const stylableApi = `
Stylable API
---
- ::primary
	- :content
	- :group
- ::auxiliary
	- :content
- ::field
	- ::label
	- ::value
- ::price
`;

storiesOf('Components|TicketPreview', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
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
	)
	.add(
		'with vertical state',
		() => (
			<TicketPreview
				vertical
			>
				<TickerPreviewPrimary>
					<TicketPreviewPrice>
						5 000 ₽
					</TicketPreviewPrice>
					<TicketPreviewSale>
						Количество билетов ограниченно
					</TicketPreviewSale>
					<TicketPreviewButton
						to='/buy'
					>
						Купить
					</TicketPreviewButton>
					<TicketPreviewDescription>
						Для всех
					</TicketPreviewDescription>
				</TickerPreviewPrimary>
				<TicketPreviewAuxiliary>
					Один Билет
				</TicketPreviewAuxiliary>
			</TicketPreview>
		)
	);
