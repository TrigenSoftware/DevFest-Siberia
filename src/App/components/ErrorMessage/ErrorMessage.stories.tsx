import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	text
} from '@storybook/addon-knobs/react';
import ErrorMessage from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Components|ErrorMessage', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with default state',
		() => (
			<ErrorMessage>
				{text('Text', 'Some error')}
			</ErrorMessage>
		)
	);
