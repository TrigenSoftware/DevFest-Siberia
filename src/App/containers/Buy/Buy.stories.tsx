/* tslint:disable jsx-no-lambda */
import React from 'react';
import {
	MemoryRouter,
	Route
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
import Header from '~/blocks/Header/mock';
import Footer from '~/blocks/Footer';
import ru from '~/data/locales/ru.json';
import en from '~/data/locales/en.json';
import Buy, {
	store
} from './mock';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Containers|Buy', module)
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
			<MemoryRouter initialEntries={['/buy']}>
				<Route
					exact
					path='/buy'
					component={props => (
						<>
							<Provider store={store}>
								<Header/>
								<Buy
									{...props}
								/>
							</Provider>
							<Footer/>
						</>
					)}
				/>
			</MemoryRouter>
		)
	);
