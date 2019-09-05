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
	I18nProvider
} from 'i18n-for-react';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import PartnersInfo from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Blocks|PartnersInfo', module)
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
		'with basic state',
		() => (
			<PartnersInfo/>
		)
	);
