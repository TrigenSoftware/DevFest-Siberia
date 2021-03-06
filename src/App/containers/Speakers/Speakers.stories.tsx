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
import Header, {
	store as headerStore
} from '~/blocks/Header/mock';
import Footer from '~/blocks/Footer';
import ru from '~/data/locales/ru.json';
import en from '~/data/locales/en.json';
import Speakers, {
	store as speakersStore
} from './mock';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Containers|Speakers', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/speakers']}>
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
		'with basic state',
		() => (
			<>
				<Provider store={headerStore}>
					<Header/>
				</Provider>
				<Provider store={speakersStore}>
					<Speakers/>
				</Provider>
				<Footer/>
			</>
		)
	);
