import {
	promises as fs
} from 'fs';
import path from 'path';
import React from 'react';
import {
	renderToString
} from 'react-dom/server';
import {
	I18nProvider
} from 'i18n-for-react';
import jsesc from 'jsesc';
import {
	StaticRouter
} from 'react-router';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import App from './App';

interface IPage {
	location: string;
	locale: string;
}

function render(locale: string, location: string) {

	const html = renderToString(
		<I18nProvider
			locale={locale}
			locales={{
				ru,
				en
			}}
			objectNotation
		>
			<StaticRouter
				location={location}
			>
				<App
					disableRouter
				/>
			</StaticRouter>
		</I18nProvider>
	);

	return html;
}

async function createTemplate() {

	const template = await fs.readFile('build/index.html', 'utf8');
	const enstr = jsesc(JSON.stringify({
		locale:  'en',
		locales: { en }
	}), {
		json:            true,
		isScriptContext: true,
		wrap:            true
	});
	const rustr = jsesc(JSON.stringify({
		locale:  'ru',
		locales: { ru }
	}), {
		json:            true,
		isScriptContext: true,
		wrap:            true
	});

	return (html, locale) => template
		.replace(/(<div id=view>)(<\/div>)/, `$1${html}$2`)
		.replace('<script', `<script>var I18N=${locale === 'en' ? enstr : rustr};</script><script`);
}

async function renderAll(pages: IPage[]) {

	const wrap = await createTemplate();

	await Promise.all(pages.map(async ({
		location,
		locale
	}) => {

		const html = wrap(render(locale, location), locale);

		await fs.mkdir(
			path.join('build', location),
			{ recursive: true }
		);

		await fs.writeFile(
			path.join('build', location, 'index.html'),
			html
		);
	}));
}

renderAll([
	{
		location: '/',
		locale:   'en'
	},
	{
		location: '/team',
		locale:   'en'
	},
	{
		location: '/ru',
		locale:   'ru'
	},
	{
		location: '/ru/team',
		locale:   'ru'
	}
]);
