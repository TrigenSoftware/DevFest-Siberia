import {
	promises as fs
} from 'fs';
import {
	createHash
} from 'crypto';
import path from 'path';
import React from 'react';
import {
	renderToString
} from 'react-dom/server';
import {
	ChunkExtractor
} from '@loadable/server';
import {
	Helmet,
	HelmetData
} from 'react-helmet';
import {
	I18nProvider
} from 'i18n-for-react';
import Store, {
	Provider
} from '@flexis/redux';
import jsesc from 'jsesc';
import {
	StaticRouter
} from 'react-router';
import {
	getLocaleFromPath
} from './services/i18n';
import ru from '~/data/locales/ru.json';
import en from '~/data/locales/en.json';
import App from './App';
import sprite from 'svg-sprite-loader/runtime/sprite.build';
import createStore from './store';
import {
	RoutesList
} from './routes';

const BUILD = 'build';
const extractorOptions = {
	statsFile:   path.resolve(BUILD, 'loadable-stats.json'),
	entrypoints: ['index']
};

function render(
	store: Store,
	locale: string,
	location: string
): [HelmetData, string, string] {

	const extractor = new ChunkExtractor(extractorOptions);
	const jsx = extractor.collectChunks(
		<I18nProvider
			locale={locale}
			locales={{
				ru: process.env.DISABLE_RU ? en : ru,
				en
			}}
			objectNotation
		>
			<StaticRouter
				location={location}
			>
				<Provider store={store}>
					<App
						disableRouter
					/>
				</Provider>
			</StaticRouter>
		</I18nProvider>
	);
	const view: string = renderToString(jsx);
	const scripts: string = extractor.getScriptTags()
		.replace(/\n/g, '')
		.replace(/async/g, 'defer');
	const helmet = Helmet.renderStatic();

	return [
		helmet,
		scripts,
		view
	];
}

async function patchPrecacheManifest() {

	const files = await fs.readdir(BUILD);
	const precacheManifestFile = files.find(_ => /precache-manifest/.test(_));

	if (!precacheManifestFile) {
		throw Error('No precache manifest');
	}

	const template = await fs.readFile(path.join(BUILD, 'index.html'), 'utf8');
	const precacheManifestPath = path.join(BUILD, precacheManifestFile);
	const precacheManifest = await fs.readFile(precacheManifestPath, 'utf8');

	return () => {

		const spriteHtml = sprite.stringify();
		const result = template.replace(/(<div id=view>)/, `${spriteHtml}$1`);
		const hash = createHash('md5').update(result).digest('hex');
		const updatedPrecacheManifest = precacheManifest.replace(
			/"[^"]*"(,\n\s+)"url": "\/index.html"/,
			`"${hash}", "url": "/shell.html"`
		);

		return Promise.all([
			fs.writeFile(path.join(BUILD, 'shell.html'), result),
			fs.writeFile(precacheManifestPath, updatedPrecacheManifest)
		]);
	};
}

async function createTemplate() {

	const template = await fs.readFile(path.join(BUILD, 'index.html'), 'utf8');
	const enstr = jsesc(JSON.stringify({
		locale:  'en',
		locales: { en }
	}), {
		json:            true,
		isScriptContext: true,
		wrap:            true
	});
	const rustr = process.env.DISABLE_RU ? enstr : jsesc(JSON.stringify({
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

		const spriteHtml = sprite.stringify();
		const result = template
			.replace(/<html([^>]*)>/, `<html$1 ${helmet.htmlAttributes.toString()}>`)
			.replace(/(<head[^>]*>)/, `$1${[
				helmet.base.toString(),
				helmet.title.toString(),
				helmet.meta.toString(),
				helmet.script.toString()
			].join('')}`)
			.replace(/<script[^>]*src.*<\/script>/, scripts)
			.replace('<script', `<script>var I18N=${locale === 'ru' ? rustr : enstr};</script><script`)
			.replace(/(<div id=view>)(<\/div>)/, `${spriteHtml}$1${view}$2`);

		return result;
	};
}

async function renderAll(pages: string[]) {

	const writePrecacheManifest = await patchPrecacheManifest();
	const wrap = await createTemplate();
	const renderers = await Promise.all(pages.map(async (routePath) => {

		const store = createStore();
		const locale = getLocaleFromPath(routePath);

		await store.loadAllSegments({
			locale
		});

		const parts = render(store, locale, routePath);

		return () => [
			routePath,
			wrap(parts, locale)
		];
	}));

	// need to add all SVGs

	await writePrecacheManifest();
	await Promise.all(renderers.map(async (render) => {

		const [
			routePath,
			html
		] = render();

		await fs.mkdir(
			path.join(BUILD, routePath),
			{ recursive: true }
		);

		await fs.writeFile(
			path.join(BUILD, routePath, 'index.html'),
			html
		);
	}));
}

renderAll(RoutesList);
