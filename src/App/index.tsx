// tslint:disable space-in-parens
import React from 'react';
import {
	render,
	hydrate
} from 'react-dom';
import {
	loadableReady
} from '@loadable/component';
import {
	IConfig,
	I18nProvider
} from 'i18n-for-react';
import {
	getLocaleFromPath
} from './services/i18n';
import {
	Provider
} from '@flexis/redux';
import App from './App';
import createStore from './store';

declare const I18N: string;

async function getI18nConfig(): Promise<IConfig> {

	if (typeof I18N === 'string') {
		return JSON.parse(I18N);
	}

	const locale = getLocaleFromPath(location.pathname);
	const config = {
		locale,
		locales: {
			en: {},
			ru: {}
		}
	};

	switch (locale) {

		case 'ru': {

			const {
				default: ru
			} = await import(/* webpackChunkName: 'ru' */ '~/locales/ru.json');

			config.locales.ru = ru;
			break;
		}

		default: {

			const {
				default: en
			} = await import(/* webpackChunkName: 'en' */ '~/locales/en.json');

			config.locales.en = en;
		}
	}

	return config;
}

async function main() {

	const root = document.querySelector('#view');
	const i18n = await getI18nConfig();
	const store = createStore();
	const app = (
		<I18nProvider
			{...i18n}
			objectNotation
		>
			<Provider store={store}>
				<App/>
			</Provider>
		</I18nProvider>
	);

	if (root !== null) {

		if (root.hasChildNodes()) {
			hydrate(app, root);
		} else {
			render(app, root);
		}
	}
}

loadableReady(main);
