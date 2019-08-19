import React from 'react';
import {
	renderToString
} from 'react-dom/server';
import {
	I18nProvider
} from 'i18n-for-react';
import {
	StaticRouter
} from 'react-router';
import ru from '~/locales/ru.json';
import App from './App';

export default function render() {

	const html = renderToString(
		<I18nProvider
			locale='ru'
			locales={{
				ru
			}}
			objectNotation
		>
			<StaticRouter
				location='/'
			>
				<App
					disableRouter
				/>
			</StaticRouter>
		</I18nProvider>
	);

	return html;
}
