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
import {
	imageUrl
} from '@flexis/ui/components/ImageSelect/ImageSelect.stories';
import PartnerCard from './';

const testText = `OZON today is a well-known technological company.
Founded in 1998 it was among the first companies to develop the Russian
e-commerce sector. Now it is transforming from a classic online-retailer
to an innovative tech platform driving the e-com market.
OZON delivers more than 65 000 orders daily and offers more than 1.5 SKUs
in 23 categories to its customers. With its DAU of 1.5 million people, unique
supply chain facilities all over Russia and smart platforms for assortment management
 and ad campaigns it offers brand new opportunities for huge and small businesses to boost their sales.
To develop as a tech platform, OZON established its innovative tech lab in
the heart of Moscow in April 2018. Today, more than 600 people (and 120 GOlang
developers among them) work here on 20+ brand new projects. We even have OZON Robotics lab.`;

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
				src={text('Source', imageUrl)}
				name={text('Name', 'Ozon')}
				to={faker.internet.url()}
				text={text('Description', testText)}
			/>
		)
	)
	.add(
		'without text',
		() => (
			<PartnerCard
				src={text('Source', imageUrl)}
				name={text('Name', 'Ozon')}
				to={faker.internet.url()}
			/>
		)
	);
