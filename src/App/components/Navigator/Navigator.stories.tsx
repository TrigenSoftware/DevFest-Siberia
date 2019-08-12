/* tslint:disable:no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	button,
	number
} from '@storybook/addon-knobs/react';
import {
	getFakeData
} from './Navigator.mock';
import Navigator from './';

const stylableApi = `
Stylable API
---
- ::list
- ::item
`;

storiesOf('Navigator', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with 3 items',
		() => {

			button('Generate new data', () => { });

			return (
				<Navigator>
					{Array.from({
						length: number('Items count', 3)
					}).map(() => {

						const fakeItem = getFakeData();

						return (
							<a
								key={fakeItem.id}
								href={`#${fakeItem.id}`}
							>
								{fakeItem.text}
							</a>
						);
					})}
				</Navigator>
			);
		}
	);
