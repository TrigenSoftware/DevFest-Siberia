import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import SROnly from '@flexis/ui/components/SROnly';
import Loading from './';

const stylableApi = `
Stylable API
---
- ::spinner
`;

storiesOf('Components|Loading', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with default state',
		() => (
			<Loading
				style={{ height: '50rem' }}
			/>
		)
	)
	.add(
		'with children',
		() => (
			<Loading
				style={{ height: '50rem' }}
			>
				<SROnly>
					<span>Loading...</span>
				</SROnly>
			</Loading>
		)
	);
