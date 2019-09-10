import React from 'react';
import {
	MemoryRouter
} from 'react-router';
import {
	storiesOf
} from '@storybook/react';
import {
	I18nProvider
} from 'i18n-for-react';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import App from '../App';

storiesOf('App|Partners', module)
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<I18nProvider
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
		'ru',
		() => (
			<I18nProvider
				locale='ru'
			>
				<MemoryRouter initialEntries={['/ru/partners']}>
					<App
						disableRouter
					/>
				</MemoryRouter>
			</I18nProvider>
		)
	)
	.add(
		'en',
		() => (
			<MemoryRouter initialEntries={['/partners']}>
				<App
					disableRouter
				/>
			</MemoryRouter>
		)
	);
