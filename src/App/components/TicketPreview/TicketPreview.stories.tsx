import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import {
	boolean,
	text
} from '@storybook/addon-knobs/react';
import TicketPreview from './';

const stylableApi = `
Stylable API
---
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
			<TicketPreview
				id={text('id', '123123123')}
				name={text('Name', 'Jhon Doe')}
				location={text('Location', 'Academ')}
				date={text('Date', '29 ноября – 1 декабря')}
				afterparty={boolean('Afterparty', false)}
			/>
		)
	);
