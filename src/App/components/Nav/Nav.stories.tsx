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
import Nav, {
	NavLink
} from './';

const stylableApi = `
Stylable API
---
- ::list
- ::link
`;

storiesOf('Components|Nav', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with default state',
		() => (
			<Nav>
				<NavLink
					{...events}
					to='/team'
				>
					Team
				</NavLink>
				<NavLink
					{...events}
					to='/speaker'
				>
					Become speaker
				</NavLink>
				<NavLink
					{...events}
					to='/en'
				>
					En
				</NavLink>
				<NavLink
					{...events}
					to='/login'
				>
					Login
				</NavLink>
			</Nav>
		)
	);
