import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import {
	select
} from '@storybook/addon-knobs';
import {
	I18nProvider
} from 'i18n-for-react';
import ru from '~/data/locales/ru.json';
import en from '~/data/locales/en.json';
import Footer from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Blocks|Footer', module)
	.addParameters({
		info: stylableApi
	})
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
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with basic state',
		() => (
			<Footer/>
		)
	);
