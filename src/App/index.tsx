import React from 'react';
import {
	render
} from 'react-dom';
import {
	I18nProvider
} from 'i18n-for-react';
// import {
// 	Provider
// } from '@flexis/redux';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import App from './App';
// import createStore from './store';

async function main() {

	const root = document.querySelector('#view');
	// const store = createStore();

	if (root !== null) {
		render(
			<I18nProvider
				locale='ru'
				locales={{
					ru,
					en
				}}
				objectNotation
			>
			{/* <Provider store={store}> */}
				<App/>
			{/* </Provider> */}
			</I18nProvider>,
			root
		);
	}
}

main();
