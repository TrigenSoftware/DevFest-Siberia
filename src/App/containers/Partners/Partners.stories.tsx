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
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import Partners from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Containers|Partners', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/partners']}>
			{story()}
		</MemoryRouter>
	))
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
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
				<Partners/>
				<Footer/>
			</>
		)
	);
