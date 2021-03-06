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
import SpeakerCard from './';

const testText = `Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo,
quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at
consequat felis. Suspendisse auctor laoreet placerat. Nam et risus non lacus
dignissim lacinia sit amet nec eros. Nulla vel urna quis libero pharetra varius.
Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo,
quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at
consequat felis. Suspendisse auctor laoreet placerat. Nam et risus non lacus
dignissim lacinia sit amet nec eros. Nulla vel urna quis libero pharetra varius.`;

const stylableApi = `
Stylable API
---
- ::info
- ::profile
- ::img
- ::name
- ::description
- ::location
- ::text
- ::footer
- ::group
- ::title
- ::talkLocation
- ::date
- ::contacts
- ::contactLink
`;

storiesOf('Components|SpeakerCard', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with zero talks',
		() => {

			const talks = [];

			return (
				<SpeakerCard
					style={{
						width:    '100%',
						maxWidth: '700px'
					}}
					src={text('Source', faker.image.avatar())}
					firstname={text('Firstname', 'Ангва')}
					lastname={text('Lastname', 'Кэррот')}
					description={text('Description', 'iOs, Android, Tech')}
					location={text('Location', 'USA, Springfiels')}
					contacts={{
						twitter: faker.internet.url(),
						vk:      faker.internet.url()
					}}
					badge='GDG'
					text={text('Text', testText)}
					talks={talks}
				/>
			);
		}
	)
	.add(
		'with one talk',
		() => {

			const talk = {
				date:           text('Talk date', '2019-12-01'),
				timeStart:      text('Talk time', '11:21'),
				lang:           'en',
				location:       text('Talk location', '543 аудитория, 3 этаж | Академпарк'),
				title:          text('Talk title', 'Название Доклада'),
				talkTypeBadge:  'Mobile',
				talkLevelBadge: 'Beginner'
			};
			const talks = [talk];

			return (
				<SpeakerCard
					style={{
						width:    '100%',
						maxWidth: '700px'
					}}
					src={text('Source', faker.image.avatar())}
					firstname={text('Firstname', 'Ангва')}
					lastname={text('Lastname', 'Кэррот')}
					description={text('Description', 'iOs, Android, Tech')}
					location={text('Location', 'USA, Springfiels')}
					contacts={{
						twitter: faker.internet.url(),
						vk:      faker.internet.url()
					}}
					badge='GDG'
					text={text('Text', testText)}
					talks={talks}
				/>
			);
		}
	)
	.add(
		'with some talks',
		() => {

			const talk = {
				date:           text('Talk date', '2019-12-01'),
				timeStart:      text('Talk time', '11:21'),
				lang:           'en',
				location:       text('Talk location', '543 аудитория, 3 этаж | Академпарк'),
				title:          text('Talk title', 'Название Доклада'),
				talkTypeBadge:  'Mobile',
				talkLevelBadge: 'Beginner'
			};
			const talks = [talk, talk];

			return (
				<SpeakerCard
					style={{
						width:    '100%',
						maxWidth: '700px'
					}}
					src={text('Source', faker.image.avatar())}
					firstname={text('Firstname', 'Ангва')}
					lastname={text('Lastname', 'Кэррот')}
					description={text('Description', 'iOs, Android, Tech')}
					location={text('Location', 'USA, Springfiels')}
					contacts={{
						twitter: faker.internet.url(),
						vk:      faker.internet.url()
					}}
					badge='GDG'
					text={text('Text', testText)}
					talks={talks}
				/>
			);
		}
	);
