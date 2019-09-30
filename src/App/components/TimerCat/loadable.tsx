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
				<svg
					className={props.className}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 2900 1200'
					fill='none'
				>
					<image
						xlinkHref={fallback}
						width={2900}
						height={1200}
					/>
				</svg>
			}
		/>
	);
}
