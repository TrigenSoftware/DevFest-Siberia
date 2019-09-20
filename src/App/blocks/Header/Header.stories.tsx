/* tslint:disable jsx-no-lambda */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	Provider
} from '@flexis/redux';
import {
	select
} from '@storybook/addon-knobs';
import {
	boolean,
	text
} from '@storybook/addon-knobs/react';
import {
	MemoryRouter,
	Route
} from 'react-router';
import {
	I18nProvider
} from 'i18n-for-react';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import Header, {
	store,
	actions
} from './mock';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Blocks|Header', module)
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
		'with success login',
		() => (
			<MemoryRouter initialEntries={['/']}>
				<Route
					exact
					path='/'
					component={props => (
						<Provider store={store}>
							<Header
								{...props}
							/>
						</Provider>
					)}
				/>
			</MemoryRouter>
		)
	)
	.add(
		'with login error',
		() => (
			<MemoryRouter initialEntries={['/']}>
				<Route
					exact
					path='/'
					component={(props) => {

						actions.showError = boolean('Show error', true);
						actions.errorMessage = text('Error message', 'Wrong password');

						return (
							<Provider store={store}>
								<Header
									{...props}
									login={actions.wrapForError(store.actions.user.login)}
								/>
							</Provider>
						);
					}}
				/>
			</MemoryRouter>
		)
	);
