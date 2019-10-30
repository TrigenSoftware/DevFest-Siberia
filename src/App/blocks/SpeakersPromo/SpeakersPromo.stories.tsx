/* tslint:disable: no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	select
} from '@storybook/addon-knobs';
import {
	MemoryRouter
} from 'react-router';
import {
	Provider
} from '@flexis/redux';
import {
	I18nProvider
} from 'i18n-for-react';
import ru from '~/data/locales/ru.json';
import en from '~/data/locales/en.json';
import SpeakersPromo, {
	store
} from './mock';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Blocks|SpeakersPromo', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
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
	.addDecorator(story => (
		<Provider
			store={store}
		>
			{story()}
		</Provider>
	))
	.add(
		'with basic state',
		() => (
			<SpeakersPromo/>
		)
	);
