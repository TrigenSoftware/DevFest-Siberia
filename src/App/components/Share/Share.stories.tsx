import faker from 'faker';
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import Share from './';

const stylableApi = `
Stylable API
---
- ::info
- ::label
- ::img
- ::name
- ::description
- ::location
- ::footer
- ::link
- ::contacts
- ::contactLink
`;

storiesOf('Components|Share', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div
			style={{
				backgroundColor: '#18227f',
				padding:         '10px',
				height:          '500px'
			}}
		>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with default state',
		() => (
			<Share
				links={{
					twitter:  faker.internet.url(),
					vk:       faker.internet.url(),
					facebook: faker.internet.url(),
					telegram: faker.internet.url(),
					site:     faker.internet.url()
				}}
			>
				Share
			</Share>
		)
	);
