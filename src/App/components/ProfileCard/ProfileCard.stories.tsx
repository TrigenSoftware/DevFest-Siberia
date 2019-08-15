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
import ProfileCard from './';

const stylableApi = `
Stylable API
---
- ::img
- ::name
- ::description
- ::location
- ::footer
- ::link
`;

storiesOf('Components|ProfileCard', module)
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
			<ProfileCard
				src={text('Source', imageUrl)}
				firstname={text('Firstname', 'Jhon')}
				lastname={text('Lastname', 'Doe')}
				description={text('Description', 'iOs, Android, Tech')}
				location={text('Location', 'USA, Springfiels')}
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
			/>
		)
	)
	.add(
		'with badge and contacnts',
		() => (
			<ProfileCard
				src={text('Source', imageUrl)}
				firstname={text('Firstname', 'Jhon')}
				lastname={text('Lastname', 'Doe')}
				description={text('Description', 'iOs, Android, Tech')}
				location={text('Location', 'USA, Springfiels')}
				badge={<Badge>GDG</Badge>}
				contacts={
					{
						twitter: `/${faker.random.word()}`,
						vk:      `/${faker.random.word()}`
					}
				}
			/>
		)
	);
