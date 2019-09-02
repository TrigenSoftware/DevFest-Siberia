/* tslint:disable no-magic-numbers */
import faker from 'faker';
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import {
	text
} from '@storybook/addon-knobs/react';
import PartnerCard from './';

const stylableApi = `
Stylable API
---
- ::logo
- ::info
- ::title
- ::link
- ::text
`;

storiesOf('Components|PartnerCard', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with text',
		() => (
			<PartnerCard
				src={text('Source', 'https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/google.svg')}
				name={text('Name', 'Google')}
				to={faker.internet.url()}
				text={text('Text', faker.lorem.paragraph(10))}
			/>
		)
	)
	.add(
		'without text',
		() => (
			<PartnerCard
				src={text('Source', 'https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/google.svg')}
				name={text('Name', 'Google')}
				to={faker.internet.url()}
			/>
		)
	);
