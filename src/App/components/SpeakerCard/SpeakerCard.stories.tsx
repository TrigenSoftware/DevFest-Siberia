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
import Badge from '../Badge';
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
- ::profile
- ::img
- ::mobName
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
				text={text('Text', testText)}
				talkTitle={text('Talk title', 'Название Доклада')}
				talkLocation={text('Talk location', '543 аудитория, 3 этаж | Академпарк')}
				talkTime={text('Talk time', '11:21 AM')}
				talkTypeBadge={
					<Badge
						color='pink'
						variant='fill'
					>
						{text('Type Badge', 'Mobile')}
					</Badge>
				}
				talkLevelBadge={
					<Badge
						color='aqua'
					>
						{text('Level Badge', 'Junior')}
					</Badge>
				}
			/>
		)
	);
