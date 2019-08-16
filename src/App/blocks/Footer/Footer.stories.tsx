import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import Footer from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Blocks|Footer', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with basic state',
		() => (
			<Footer/>
		)
	);
