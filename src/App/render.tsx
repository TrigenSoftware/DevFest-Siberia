import {
	promises as fs
} from 'fs';
import path from 'path';
import React from 'react';
import {
	Helmet,
	HelmetData
} from 'react-helmet';
import {
	renderToString
} from 'react-dom/server';
import {
	ChunkExtractor
} from '@loadable/server';
import {
	I18nProvider
} from 'i18n-for-react';
import jsesc from 'jsesc';
import {
	StaticRouter
} from 'react-router';
import {
	getLocaleFromPath
} from './services/i18n';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import App from './App';
import sprite from 'svg-sprite-loader/runtime/sprite.build';
import {
	RoutesList
} from './routes';

const extractorOptions = {
	statsFile:   path.resolve('build/loadable-stats.json'),
	entrypoints: ['index']
};

function render(locale: string, location: string): [HelmetData, string, string] {

	const extractor = new ChunkExtractor(extractorOptions);
	const jsx = extractor.collectChunks(
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
	const view: string = renderToString(jsx);
	const scripts: string = extractor.getScriptTags().replace(/\n/g, '');
	const helmet = Helmet.renderStatic();

	return [
		helmet,
		scripts,
		view
	];
}

async function createTemplate() {

	const template = await fs.readFile('build/index.html', 'utf8');
	const spriteHtml = sprite.stringify();
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

	return (
		[helmet, scripts, view]: [HelmetData, string, string],
		locale: string
	) => {

		const result = template
			.replace(/<html([^>]*)>/, `<html$1 ${helmet.htmlAttributes.toString()}>`)
			.replace(/(<head[^>]*>)/, `$1${[
				helmet.base.toString(),
				helmet.title.toString(),
				helmet.meta.toString(),
				helmet.script.toString()
			].join('')}`)
			.replace(/<script[^>]*src.*<\/script>/, scripts)
			.replace('<script', `<script>var I18N=${locale === 'en' ? enstr : rustr};</script><script`)
			.replace(/(<div id=view>)(<\/div>)/, `${spriteHtml}$1${view}$2`);

		return result;
	};
}

async function renderAll(pages: string[]) {

	const wrap = await createTemplate();

	await Promise.all(pages.map(async (routePath) => {

		const locale = getLocaleFromPath(routePath);
		const parts = render(locale, routePath);
		const html = wrap(parts, locale);

		await fs.mkdir(
			path.join('build', routePath),
			{ recursive: true }
		);

		await fs.writeFile(
			path.join('build', routePath, 'index.html'),
			html
		);
	}));
}

renderAll(RoutesList);
