/* tslint:disable:no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import Speakers from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Blocks|Speakers', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.add(
		'with basic state',
		() => (
			<Speakers/>
		)
	);
