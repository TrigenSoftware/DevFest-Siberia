import faker from 'faker';
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
import {
	select
} from '@storybook/addon-knobs';
import {
	I18nProvider
} from 'i18n-for-react';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import {
	imageUrl
} from '@flexis/ui/components/ImageSelect/ImageSelect.stories';
import Badge from '../Badge';
import ProfileCard from './';

const stylableApi = `
Stylable API
---
- ::img
- ::name
- ::description
- ::location
- ::footer
- ::contacts
- ::link
`;

storiesOf('Components|ProfileCard', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<I18nProvider
			locale={select('Locale', ['en', 'ru'], 'en')}
			locales={{
				ru,
				en
			}}
			objectNotation
		>
			{story()}
		</I18nProvider>
	))
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with default data',
		() => (
			<ProfileCard
				src={text('Source', imageUrl)}
				firstname={text('Firstname', 'Jhon')}
				lastname={text('Lastname', 'Doe')}
				description={text('Description', 'iOs, Android, Tech')}
				location={text('Location', 'USA, Springfiels')}
				clickable={boolean('Clickable', false)}
			/>
		)
	)
	.add(
		'with badge',
		() => (
			<ProfileCard
				src={text('Source', imageUrl)}
				firstname={text('Firstname', 'Jhon')}
				lastname={text('Lastname', 'Doe')}
				description={text('Description', 'iOs, Android, Tech')}
				location={text('Location', 'USA, Springfiels')}
				badge={<Badge>GDG</Badge>}
				clickable={boolean('Clickable', false)}
			/>
		)
	)
	.add(
		'with badge and contacts',
		() => (
			<ProfileCard
				src={text('Source', imageUrl)}
				firstname={text('Firstname', 'Jhon')}
				lastname={text('Lastname', 'Doe')}
				description={text('Description', 'iOs, Android, Tech')}
				location={text('Location', 'USA, Springfiels')}
				badge={<Badge>GDG</Badge>}
				contacts={{
					twitter: faker.internet.url(),
					vk:      faker.internet.url()
				}}
				clickable={boolean('Clickable', false)}
			/>
		)
	);
