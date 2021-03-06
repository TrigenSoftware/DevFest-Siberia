import {
	BundleAnalyzerPlugin
} from 'webpack-bundle-analyzer';
import LoadablePlugin from '@loadable/webpack-plugin';
import {
	StylableImportOrderPlugin
} from '@trigen/scripts-preset-react-app/webpack/StylableImportOrderPlugin';
import {
	findIndex,
	pasteBrowserslistEnv
} from '@trigen/scripts-preset-react-app/helpers';
import update from 'immutability-helper';

const jsonDataLoader = {
	type:    'javascript/auto',
	test:    /\.fetch\.json$/,
	loader:  'file-loader',
	options: {
		name: 'data/[folder]-[name].[ext]'
	}
};

export function dev(config) {
	return update(config, {
		module: {
			rules: {
				$push: [jsonDataLoader]
			}
		},
		plugins: {
			$push: [
				process.env.BUNDLE_ANALYZER && new BundleAnalyzerPlugin(),
				new StylableImportOrderPlugin({
					fullControl: true
				})
			].filter(Boolean)
		}
	});
}

export function build(config, {
	browserslistEnv
}) {
	return update(config, {
		output: {
			publicPath: {
				$set: process.env.BASE_URL
					? './'
					: config.output.publicPath
			}
		},
		// optimization: {
		// 	minimize: {
		// 		$set: false
		// 	}
		// },
		module: {
			rules: {
				[findIndex('test', '/\\.svg$/', config.module.rules)]: {
					use: {
						0: {
							options: {
								runtimeOptions: {
									skipSymbol: {
										$set: Boolean(process.env.RENDERING)
									}
								}
							}
						}
					}
				},
				$push: [jsonDataLoader]
			}
		},
		plugins: {
			$push: [
				new StylableImportOrderPlugin({
					fullControl: true
				}),
				new LoadablePlugin({
					filename: pasteBrowserslistEnv('loadable-stats.[env].json', browserslistEnv)
				})
			]
		}
	});
}

export function render(config) {
	return update(config, {
		output: {
			publicPath: {
				$set: process.env.BASE_URL
					? './'
					: config.output.publicPath
			}
		}
	});
}
