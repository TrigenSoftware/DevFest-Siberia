// tslint:disable space-in-parens
import React from 'react';
import loadable from '@loadable/component';
import Loading from '~/components/Loading';

export default loadable(
	() => import(/* webpackChunkName: 'weather' */ './connected'),
	{ fallback: <Loading/> }
);
