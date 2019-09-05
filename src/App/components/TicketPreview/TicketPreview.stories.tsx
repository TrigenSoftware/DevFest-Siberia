import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	boolean
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
	.add(
		'with content',
		() => (
			<TicketPreview
				id='2231'
				name='Василий Петров'
				location='Академпарк, 18'
				date='29 ноября – 1 декабря'
				afterparty={boolean('Afterparty', false)}
			/>
		)
	);
