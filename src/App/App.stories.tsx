import faker from 'faker';
import React from 'react';
import {
	MemoryRouter
} from 'react-router';
import {
	storiesOf
} from '@storybook/react';
import {
	text
} from '@storybook/addon-knobs/react';
import {
	I18nProvider
} from 'i18n-for-react';
import ru from '~/locales/ru.json';
import en from '~/locales/en.json';
import App from './App';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Components|Typography', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'typography',
		() => (
			<>
				<h1>{text('h1', 'Header 01')}</h1>
				<h2>{text('h2', 'Header 02')}</h2>
				<h3>{text('h3', 'Header 03')}</h3>
				<h4>{text('h4', 'Header 04')}</h4>
				<h5>{text('h5', 'Header 05')}</h5>
				<h6>{text('h6', 'Header 06')}</h6>
				<p>{text('p', faker.lorem.paragraph())}</p>
			</>
		)
	);

storiesOf('App|Home', module)
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<I18nProvider
			locales={{
				ru,
				en
			}}
			objectNotation
		>
			{story()}
		</I18nProvider>
	))
	.add(
		'ru',
		() => (
			<I18nProvider
				locale='ru'
			>
				<MemoryRouter initialEntries={['/ru']}>
					<App
						disableRouter
					/>
				</MemoryRouter>
			</I18nProvider>
		)
	)
	.add(
		'eng',
		() => (
			<MemoryRouter initialEntries={['/']}>
				<App
					disableRouter
				/>
			</MemoryRouter>
		)
	);

storiesOf('App|CodeOfConduct', module)
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<I18nProvider
			locales={{
				ru,
				en
			}}
			objectNotation
		>
			{story()}
		</I18nProvider>
	))
	.add(
		'ru',
		() => (
			<I18nProvider
				locale='ru'
			>
				<MemoryRouter initialEntries={['/ru/code-of-conduct']}>
					<App
						disableRouter
					/>
				</MemoryRouter>
			</I18nProvider>
		)
	)
	.add(
		'eng',
		() => (
			<MemoryRouter initialEntries={['/code-of-conduct']}>
				<App
					disableRouter
				/>
			</MemoryRouter>
		)
	);

storiesOf('App|Partners', module)
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<I18nProvider
			locales={{
				ru,
				en
			}}
			objectNotation
		>
			{story()}
		</I18nProvider>
	))
	.add(
		'ru',
		() => (
			<I18nProvider
				locale='ru'
			>
				<MemoryRouter initialEntries={['/ru/partners']}>
					<App
						disableRouter
					/>
				</MemoryRouter>
			</I18nProvider>
		)
	)
	.add(
		'eng',
		() => (
			<MemoryRouter initialEntries={['/partners']}>
				<App
					disableRouter
				/>
			</MemoryRouter>
		)
	);

storiesOf('App|Team', module)
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<I18nProvider
			locales={{
				ru,
				en
			}}
			objectNotation
		>
			{story()}
		</I18nProvider>
	))
	.add(
		'ru',
		() => (
			<I18nProvider
				locale='ru'
			>
				<MemoryRouter initialEntries={['/ru/team']}>
					<App
						disableRouter
					/>
				</MemoryRouter>
			</I18nProvider>
		)
	)
	.add(
		'eng',
		() => (
			<MemoryRouter initialEntries={['/team']}>
				<App
					disableRouter
				/>
			</MemoryRouter>
		)
	);

storiesOf('App|Speakers', module)
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.addDecorator(story => (
		<I18nProvider
			locales={{
				ru,
				en
			}}
			objectNotation
		>
			{story()}
		</I18nProvider>
	))
	.add(
		'ru',
		() => (
			<I18nProvider
				locale='ru'
			>
				<MemoryRouter initialEntries={['/ru/speakers']}>
					<App
						disableRouter
					/>
				</MemoryRouter>
			</I18nProvider>
		)
	)
	.add(
		'eng',
		() => (
			<MemoryRouter initialEntries={['/speakers']}>
				<App
					disableRouter
				/>
			</MemoryRouter>
		)
	);
