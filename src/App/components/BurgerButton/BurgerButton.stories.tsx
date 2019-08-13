import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	boolean
} from '@storybook/addon-knobs/react';
import BurgerButton from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Components|BurgerButton', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with default state',
		() => (
			<BurgerButton
				active={boolean('Active', false)}
			>
				Open menu
			</BurgerButton>
		)
	)
	.add(
		'with active state',
		() => (
			<BurgerButton
				active={boolean('Active', true)}
			>
				Open menu
			</BurgerButton>
		)
	);
