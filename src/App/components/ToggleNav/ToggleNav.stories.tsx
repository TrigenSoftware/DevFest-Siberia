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
import ToggleNav, {
	ToggleNavLink
} from './';

storiesOf('Components|ToggleNav', module)
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.addParameters({
		info: buildInfo([
			{
				values: [
					'list',
					'item',
					'link'
				],
				prefix: '::'
			}
		])
	})
	.add(
		'with basic state',
		() => (
			<ToggleNav>
				<ToggleNavLink
					to='/all'
				>
					Все
				</ToggleNavLink>
				<ToggleNavLink
					to='/mobile'
				>
					Мобильные
				</ToggleNavLink>
				<ToggleNavLink
					to='/web'
				>
					Веб
				</ToggleNavLink>
				<ToggleNavLink
					to='/ii'
				>
					ИИ
				</ToggleNavLink>
			</ToggleNav>
		)
	)
	.add(
		'with query param',
		() => (
			<ToggleNav>
				<ToggleNavLink
					to='/speakers?type=all'
				>
					Все
				</ToggleNavLink>
				<ToggleNavLink
					to='/speakers?type=mobile'
				>
					Мобильные
				</ToggleNavLink>
				<ToggleNavLink
					to='/speakers?type=web'
				>
					Веб
				</ToggleNavLink>
				<ToggleNavLink
					to='/speakers?type=ai'
				>
					ИИ
				</ToggleNavLink>
			</ToggleNav>
		)
	);
