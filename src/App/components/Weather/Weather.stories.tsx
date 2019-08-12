/* tslint:disable:no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	text,
	number,
	select,
	button
} from '@storybook/addon-knobs/react';
import {
	getFakeData
} from './Weather.mock';
import Weather from './';

let fakeData = getFakeData();

const stylableApi = `
Stylable API
---
- :smSize
- ::date
- ::temp
- ::description
- ::params
- ::param
`;

storiesOf('Weather', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with basic data',
		() => {

			button('Generate new data', () => {
				fakeData = getFakeData();
			});

			return (
				<Weather
					date={text('Date', fakeData.date)}
					temp={number('Temperature', fakeData.temp)}
					description={text('Description', fakeData.description)}
					humidity={number('Humidity', fakeData.humidity)}
					clouds={number('Clouds', fakeData.clouds)}
					precipitation={number('Precipitation', fakeData.precipitation)}
				/>
			);
		}
	)
	.add(
		'with small size',
		() => {

			button('Generate new data', () => {
				fakeData = getFakeData();
			});

			return (
				<Weather
					date={text('Date', fakeData.date)}
					temp={number('Temperature', fakeData.temp)}
					description={text('Description', fakeData.description)}
					humidity={number('Humidity', fakeData.humidity)}
					clouds={number('Clouds', fakeData.clouds)}
					precipitation={number('Precipitation', fakeData.precipitation)}
					size={select('Size', [null, 'sm'], 'sm')}
				/>
			);
		}
	);
