import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import SROnly from '@flexis/ui/components/SROnly';
import Spinner from './';

const stylableApi = `
Stylable API
---
- ::circular
- ::path
`;

storiesOf('Components|Spinner', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with default state',
		() => (
			<Spinner/>
		)
	)
	.add(
		'with children',
		() => (
			<Spinner>
				<SROnly>
					<span>Spinner...</span>
				</SROnly>
			</Spinner>
		)
	);
