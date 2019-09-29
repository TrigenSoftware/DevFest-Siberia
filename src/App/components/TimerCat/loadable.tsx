// tslint:disable space-in-parens no-magic-numbers
import React from 'react';
import loadable from '@loadable/component';
import {
	IProps
} from './types';
import fallback from './fallback.jpg';

const TimerCat = loadable(
	() => import(/* webpackChunkName: 'cat' */ './index'),
	{ ssr: false }
);

export default function Loadable(props: IProps) {
	return (
		<TimerCat
			{...props}
			fallback={
				<img
					className={props.className}
					src={fallback}
				/>
			}
		/>
	);
}
