import faker from 'faker';
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

storiesOf('Components|Typography', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'typography',
		() => (
			<>
				<h1>{text('h1', 'Header 01')}</h1>
				<h2>{text('h2', 'Header 02')}</h2>
				<h3>{text('h3', 'Header 03')}</h3>
				<h4>{text('h4', 'Header 04')}</h4>
				<h5>{text('h5', 'Header 05')}</h5>
				<h6>{text('h6', 'Header 06')}</h6>
				<p>{text('p', faker.lorem.paragraph())}</p>
			</>
		)
	);
