/* tslint:disable:no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	text
} from '@storybook/addon-knobs/react';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Typography', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'typography',
		() => (
			<>
				<h1>{text('h1', 'Test')}</h1>
				<h2>{text('h2', 'Test')}</h2>
				<h3>{text('h3', 'Test')}</h3>
				<h4>{text('h4', 'Test')}</h4>
				<h5>{text('h5', 'Test')}</h5>
				<h6>{text('h6', 'Test')}</h6>
				<p>{text('p', 'Test')}</p>
			</>
		)
	);
