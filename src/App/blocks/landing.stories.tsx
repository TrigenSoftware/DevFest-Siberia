/* tslint:disable:no-magic-numbers */
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
import Header from './Header';
import Main from './Main';
import Facts from './Facts';
import Location from './Location';
import Partners from './Partners';
import Team from './Team';
import Speakers from './Speakers';
import Footer from './Footer';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Blocks|Landing', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
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
		'with main page',
		() => (
			<>
				<Header/>
				<Main/>
				<Facts/>
				<Location/>
				<Partners/>
				<Footer/>
			</>
		)
	)
	.add(
		'with team page',
		() => (
			<>
				<Header/>
				<Team/>
				<Footer/>
			</>
		)
	)
	.add(
		'with speakers page',
		() => (
			<>
				<Header/>
				<Speakers/>
				<Footer/>
			</>
		)
	);
