/* tslint:disable:no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import Header from './Header';
import Main from './Main';
import Facts from './Facts';
import Subscribe from './Subscribe';
import Location from './Location';
import Partners from './Partners';
import Team from './Team';
import Footer from './Footer';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Blocks|Landing', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.add(
		'with main page',
		() => (
			<>
				<Header/>
				<Main/>
				<Facts/>
				<Subscribe/>
				<Location/>
				<Partners/>
				<Footer/>
			</>
		)
	)
	.add(
		'with team page',
		() => (
			<>
				<Header/>
				<Team/>
				<Footer/>
			</>
		)
	);
