import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import {
	events
} from '@flexis/ui/components/Link/Link.stories';
import {
	events as buttonEvents
} from '@flexis/ui/components/Button/Button.stories';
import Link from '~/components/Link';
import Button from '~/components/Button';
import Header, {
	HeaderNav,
	HeaderLink,
	HeaderSpacer
} from './';
import Share from '~/icons/share.svg';

const stylableApi = `
Stylable API
---
- ::logo
`;

storiesOf('Blocks|Header', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with basic state',
		() => (
			<Header>
				<HeaderNav>
					<HeaderLink
						{...events}
						to='/team'
					>
						Team
					</HeaderLink>
					<HeaderLink
						{...events}
						to='/speaker'
					>
						Become speaker
					</HeaderLink>
					<HeaderSpacer/>
					<HeaderLink
						{...events}
						to='/en'
						separated
					>
						En
					</HeaderLink>
					<HeaderLink
						{...events}
						to='/login'
					>
						Login
					</HeaderLink>
				</HeaderNav>
				<Link
					disguised
				>
					<Button
						{...buttonEvents}
					>
						Buy ticket
					</Button>
				</Link>
				<HeaderLink
					{...events}
					to='/share'
					icon={<Share/>}
				/>
			</Header>
		)
	);
