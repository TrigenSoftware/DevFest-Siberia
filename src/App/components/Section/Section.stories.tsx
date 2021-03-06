/* tslint:disable:no-magic-numbers */
import faker from 'faker';
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import Section from './';

const stylableApi = `
Stylable API
---
- ::center
`;

storiesOf('Components|Section', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.add(
		'with content',
		() => (
			<Section>
				{faker.lorem.paragraph()}
			</Section>
		)
	);
