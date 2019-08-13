import faker from 'faker';
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import {
	text,
	boolean,
	select
} from '@storybook/addon-knobs/react';
import LinkStories, {
	events
} from '@flexis/ui/components/Link/Link.stories';
import {
	extendInfo
} from '@flexis/ui/helpers/stories';
import {
	AlignSideValues
} from '../types';
import Link from './';

const {
	TestIcon
} = global as any;

export const parameters = extendInfo(
	LinkStories.parameters,
	[
		{
			values: ['disabled'],
			prefix: ':'
		}
	]
);

storiesOf('Components|Link', module)
	.addParameters(parameters)
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with text',
		() => (
			<Link
				{...events}
				to={`/${faker.random.word()}`}
				disabled={boolean('Disabled', false)}
				disguised={boolean('Disguised', false)}
			>
				{text('Label', 'Link')}
			</Link>
		)
	)
	.add(
		'with icon',
		() => (
			<Link
				{...events}
				to={`/${faker.random.word()}`}
				icon={<TestIcon/>}
				alignIcon={select('Align icon', AlignSideValues, AlignSideValues[0])}
				disabled={boolean('Disabled', false)}
				disguised={boolean('Disguised', false)}
			>
				{text('Label', 'Link')}
			</Link>
		)
	)
	.add(
		'with right aligned icon',
		() => (
			<Link
				{...events}
				to={`/${faker.random.word()}`}
				icon={<TestIcon/>}
				alignIcon={select('Align icon', AlignSideValues, 'right')}
				disabled={boolean('Disabled', false)}
				disguised={boolean('Disguised', false)}
			>
				{text('Label', 'Link')}
			</Link>
		)
	)
	.add(
		'with flex icon',
		() => (
			<Link
				{...events}
				style={{ width: '100px' }}
				to={`/${faker.random.word()}`}
				icon={<TestIcon/>}
				alignIcon={select('Align icon', AlignSideValues, AlignSideValues[0])}
				flexIcon={boolean('Flex icon', true)}
				disabled={boolean('Disabled', false)}
				disguised={boolean('Disguised', false)}
			>
				{text('Label', 'Link')}
			</Link>
		)
	);
