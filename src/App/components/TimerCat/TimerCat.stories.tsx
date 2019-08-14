/* tslint:disable:no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	select,
	date
} from '@storybook/addon-knobs/react';
import {
	startTime
} from '~/data';
import TimerCat from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Components|TimerCat', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with default state',
		() => (
			<TimerCat
				locale={select('Locale', ['ru', 'en'], 'en')}
				start={date('Start at', startTime)}
			/>
		)
	);
