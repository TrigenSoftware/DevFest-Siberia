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
import SpeakerCard from './';

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

storiesOf('Components|SpeakerCard', module)
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
			<SpeakerCard
				style={{
					width:    '100%',
					maxWidth: '700px'
				}}
				src={text('Source', imageUrl)}
				firstname={text('Firstname', 'Ангва')}
				lastname={text('Lastname', 'Кэррот')}
				description={text('Description', 'iOs, Android, Tech')}
				location={text('Location', 'USA, Springfiels')}
				contacts={{
					twitter: faker.internet.url(),
					vk:      faker.internet.url()
				}}
				badge={<Badge>GDG</Badge>}
				talkTitle={text('Talk title', 'Название Доклада')}
				talkLocation={text('Talk location', '543 аудитория, 3 этаж | Академпарк')}
				talkTime={text('Talk time', '11:21')}
				talkTypeBadge='Mobile'
				talkLevelBadge='Junior'
			>
				<p>
					Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo,
					quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at
					consequat felis. Suspendisse auctor laoreet placerat. Nam et risus non lacus
					dignissim lacinia sit amet nec eros. Nulla vel urna quis libero pharetra varius.
				</p>
				<p>
					Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo,
					quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at
					consequat felis. Suspendisse auctor laoreet placerat. Nam et risus non lacus
					dignissim lacinia sit amet nec eros. Nulla vel urna quis libero pharetra varius.
				</p>
			</SpeakerCard>
		)
	);
