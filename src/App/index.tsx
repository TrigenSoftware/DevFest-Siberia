import React from 'react';
import {
	render
} from 'react-dom';
import {
	Provider
} from '@flexis/redux';
import App from './App';
import createStore from './store';

async function main() {

	const root = document.querySelector('#view');
	const store = createStore();

	if (root !== null) {
		render(
			<Provider store={store}>
				<App/>
			</Provider>,
			root
		);
	}
}

main();
