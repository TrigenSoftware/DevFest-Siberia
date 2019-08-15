/* tslint:disable:no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import Subscribe from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Blocks|Subscribe', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.add(
		'with basic state',
		() => (
			<Subscribe/>
		)
	);
