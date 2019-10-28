import React from 'react';
import {
	MemoryRouter
} from 'react-router';
import {
	Provider
} from '@flexis/redux';
import {
	storiesOf
} from '@storybook/react';
import {
	select,
	date
} from '@storybook/addon-knobs';
import {
	I18nProvider
} from 'i18n-for-react';
import Header, {
	store
} from '~/blocks/Header/mock';
import Footer from '~/blocks/Footer';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import Schedule from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Containers|Schedule', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/schedule']}>
			{story()}
		</MemoryRouter>
	))
	.addDecorator(story => (
		<I18nProvider
			locale={select('Locale', ['en', 'ru'], 'en')}
			locales={{
				ru,
				en
			}}
			objectNotation
		>
			{story()}
		</I18nProvider>
	))
	.add(
		'with default state',
		() => (
			<>
				<Provider store={store}>
					<Header/>
				</Provider>
				<Schedule/>
				<Footer/>
			</>
		)
	)
	.add(
		'with 2019-11-30 date',
		() => (
			<>
				<Provider store={store}>
					<Header/>
				</Provider>
				<Schedule
					datetime={date('Current time', new Date('2019-11-30'))}
				/>
				<Footer/>
			</>
		)
	)
	.add(
		'with 2019-12-01 date',
		() => (
			<>
				<Provider store={store}>
					<Header/>
				</Provider>
				<Schedule
					datetime={date('Current time', new Date('2019-12-01'))}
				/>
				<Footer/>
			</>
		)
	);
