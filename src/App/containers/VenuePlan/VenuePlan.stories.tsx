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
	select
} from '@storybook/addon-knobs';
import {
	I18nProvider
} from 'i18n-for-react';
import Header, {
	store
} from '~/blocks/Header/mock';
import Footer from '~/blocks/Footer';
import ru from '~/data/locales/ru.json';
import en from '~/data/locales/en.json';
import VenuePlan from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Containers|VenuePlan', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/plan']}>
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
				<VenuePlan/>
				<Footer/>
			</>
		)
	);
