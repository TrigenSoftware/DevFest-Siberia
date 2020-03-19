import path from 'path';
import React, {
	ReactElement
} from 'react';
import Renderer, {
	Html
} from '@trigen/scripts-preset-react-app/helpers/renderer';
import {
	ChunkExtractor
} from '@loadable/server';
import {
	Helmet
} from 'react-helmet';
import {
	I18nProvider
} from 'i18n-for-react';
import {
	Provider
} from '@flexis/redux';
import {
	StaticRouter
} from 'react-router';
import jsesc from 'jsesc';
import {
	getLocaleFromPath
} from './services/i18n';
import ru from './data/locales/ru.json';
import en from './data/locales/en.json';
import App from './App';
import sprite from 'svg-sprite-loader/runtime/sprite.build';
import createStore from './store';
import {
	RoutesList
} from './routes';

const i18nEn = jsesc(JSON.stringify({
	locale:  'en',
	locales: { en }
}), {
	json:            true,
	isScriptContext: true,
	wrap:            true
});
const i18nRu = process.env.DISABLE_RU ? i18nEn : jsesc(JSON.stringify({
	locale:  'ru',
	locales: { ru }
}), {
	json:            true,
	isScriptContext: true,
	wrap:            true
});

class AppRenderer extends Renderer {

	extractorOptions = {
		statsFile:   path.resolve(this.BUILD_DIR, 'loadable-stats.json'),
		entrypoints: ['index']
	};

	async render(route: string) {

		const store = createStore();
		const locale = getLocaleFromPath(route);

		await store.loadAllSegments({
			locale
		});

		return (
			<I18nProvider
				locale={locale}
				locales={{
					ru: process.env.DISABLE_RU ? en : ru,
					en
				}}
				objectNotation
			>
				<StaticRouter
					location={route}
				>
					<Provider store={store}>
						<App
							disableRouter
						/>
					</Provider>
				</StaticRouter>
			</I18nProvider>
		);
	}

	renderTemplate(jsx: ReactElement) {

		const {
			extractorOptions
		} = this;
		const {
			locale
		} = jsx.props;
		const extractor = new ChunkExtractor(extractorOptions);
		const template = super.renderTemplate(
			extractor.collectChunks(jsx)
		);
		const helmet = Helmet.renderStatic();
		const scripts: string = extractor.getScriptTags()
			.replace(/\n/g, '');

		return Html.apply(
			template,
			Html.addHtmlAttributes(
				helmet.htmlAttributes.toString()
			),
			Html.addHeadElements(
				helmet.base.toString(),
				helmet.title.toString(),
				helmet.meta.toString(),
				helmet.script.toString()
			),
			Html.replaceEntryScript(scripts),
			Html.prependEmbededScripts(
				`var I18N=${locale === 'ru' ? i18nRu : i18nEn};`
			)
		);
	}

	async afterRender() {

		await super.afterRender();

		const spriteHtml = sprite.stringify();

		this.addSprite(spriteHtml);
		await this.createShellHtml(spriteHtml);
	}

	private addSprite(sprite: string) {
		this.output.forEach((file) => {
			file.content = Html.apply(
				file.content,
				Html.addElementsBeforeView(sprite)
			);
		});
	}

	private async createShellHtml(sprite: string) {

		const shellHtml = Html.apply(
			this.template,
			Html.addElementsBeforeView(sprite)
		);

		await this.writeAndInjectShellIntoPrecacheManifest(shellHtml);
	}
}

new AppRenderer().renderRoutes(RoutesList);
