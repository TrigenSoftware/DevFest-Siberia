/* tslint:disable:no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	number,
	button
} from '@storybook/addon-knobs/react';
import Weather from '../Weather';
import {
	getFakeData
} from '../Weather/Weather.mock';
import WeatherList from './';

const stylableApi = `
Stylable API
---
- ::item
`;

storiesOf('WeatherList', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with items',
		() => {

			button('Generate new data', () => {});

			return (
				<WeatherList>
					{Array.from({
						length: number('Items count', 3)
					}).map((_, i) => {

						const fakeData = getFakeData();

						return (
							<Weather
								key={i}
								date={fakeData.date}
								temp={fakeData.temp}
								description={fakeData.description}
								humidity={fakeData.humidity}
								clouds={fakeData.clouds}
								precipitation={fakeData.precipitation}
							/>
						);
					})}
				</WeatherList>
			);
		}
	);
