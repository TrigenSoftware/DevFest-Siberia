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
import Cabinet, {
	store,
	actions
} from './mock';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Containers|Cabinet', module)
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
			<MemoryRouter initialEntries={['/cabinet']}>
				<Route
					exact
					path='/cabinet'
					component={(props) => {

						store.actions.user.login('test', 'test');

						return (
							<>
								<Provider store={store}>
									<Header/>
									<Cabinet
										{...props}
									/>
								</Provider>
								<Footer/>
							</>
						);
					}}
				/>
			</MemoryRouter>
		)
	)
	.add(
		'with afterparty ticket',
		() => (
			<MemoryRouter initialEntries={['/cabinet']}>
				<Route
					exact
					path='/cabinet'
					component={(props) => {

						store.actions.user.login('test', 'test');
						actions.buyAfterpartyTicket();

						return (
							<>
								<Provider store={store}>
									<Header/>
									<Cabinet
										{...props}
										fetchOrders={() => null}
									/>
								</Provider>
								<Footer/>
							</>
						);
					}}
				/>
			</MemoryRouter>
		)
	);
