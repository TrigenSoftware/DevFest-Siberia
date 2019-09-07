import LoadablePlugin from '@loadable/webpack-plugin';

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
