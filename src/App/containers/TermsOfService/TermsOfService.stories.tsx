import React from 'react';
import {
	MemoryRouter
} from 'react-router';
import {
	storiesOf
} from '@storybook/react';
import {
	select
} from '@storybook/addon-knobs';
import {
	I18nProvider
} from 'i18n-for-react';
import Header from '~/blocks/Header';
import Footer from '~/blocks/Footer';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import TermsOfService from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Containers|TermsOfService', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/terms']}>
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
				<Header/>
				<TermsOfService/>
				<Footer/>
			</>
		)
	);
