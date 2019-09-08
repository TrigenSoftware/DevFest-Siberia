// tslint:disable space-in-parens no-magic-numbers
import React from 'react';
import loadable from '@loadable/component';

export default loadable(
	() => import(/* webpackChunkName: 'cat' */ './index'),
	{
		fallback: (
			<img
				width={2900}
				height={1200}
				src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
			/>
		)
	}
);
