import LoadablePlugin from '@loadable/webpack-plugin';
import {
	StylableImportOrderPlugin
} from '@trigen/scripts-preset-react-app/webpack/StylableImportOrderPlugin';

export function dev(config) {
	return {
		...config,
		plugins: [
			...config.plugins,
			new StylableImportOrderPlugin({
				fullControl: false
			})
		]
	};
}

export function build(config) {
	return {
		...config,
		output: {
			...config.output,
			publicPath: process.env.BASE_URL
				? './'
				: config.output.publicPath
		},
		plugins: [
			...config.plugins,
			new StylableImportOrderPlugin({
				fullControl: false
			}),
			new LoadablePlugin()
		]
	};
}

export function render(config) {
	return {
		...config,
		output: {
			...config.output,
			publicPath: process.env.BASE_URL
				? './'
				: config.output.publicPath
		}
	};
}
