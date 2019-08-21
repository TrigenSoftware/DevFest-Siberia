/* tslint:disable jsx-no-lambda */
import React from 'react';
import {
	MemoryRouter,
	Route
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
import Speakers from './';

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
			<MemoryRouter initialEntries={['/speakers']}>
				<Route
					path='/speakers'
					component={props => (
						<>
							<Header/>
							<Speakers
								{...props}
							/>
							<Footer/>
						</>
					)}
				/>
			</MemoryRouter>
		)
	);
