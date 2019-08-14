import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import {
	text,
	select
} from '@storybook/addon-knobs/react';
import LinkStories, {
	events
} from '@flexis/ui/components/Link/Link.stories';
import {
	extendInfo
} from '@flexis/ui/helpers/stories';
import ContactLink, {
	ContactLinkTypeValues
} from './';

export const parameters = extendInfo(
	LinkStories.parameters,
	[
		{
			values: ContactLinkTypeValues,
			prefix: ':'
		}
	]
);

storiesOf('Components|ContactLink', module)
	.addParameters(parameters)
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with default state',
		() => (
			<ContactLink
				{...events}
				to='/'
				type={select('Contact Link Type', [...ContactLinkTypeValues], ContactLinkTypeValues[0])}
			/>
		)
	)
	.add(
		'with children',
		() => (
			<ContactLink
				{...events}
				to='/'
				type={select('Type', [...ContactLinkTypeValues], ContactLinkTypeValues[0])}
			>
				{text('SROnly Content', 'Telegram')}
			</ContactLink>
		)
	);
