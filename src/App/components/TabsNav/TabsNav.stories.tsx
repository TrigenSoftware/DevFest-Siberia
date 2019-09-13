import React from 'react';
import {
	MemoryRouter
} from 'react-router';
import {
	storiesOf
} from '@storybook/react';
import {
	buildInfo
} from '@flexis/ui/helpers/stories';
import TabsNav, {
	TabsNavItem
} from './';

storiesOf('Components|TabsNav', module)
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.addParameters({
		info: buildInfo([
			{
				values: [
					'item',
					'label',
					'description'
				],
				prefix: '::'
			}
		])
	})
	.add(
		'with basic state',
		() => (
			<TabsNav>
				<TabsNavItem
					to='/one'
					label='1 Билет – 5000₽'
				/>
				<TabsNavItem
					to='/for-company'
					label='Для компаний'
					description='покупка нескольких билетов'
				/>
			</TabsNav>
		)
	);
