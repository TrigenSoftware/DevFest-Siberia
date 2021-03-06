import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	boolean,
	select
} from '@storybook/addon-knobs/react';
import {
	MemoryRouter
} from 'react-router';
import {
	I18nProvider
} from 'i18n-for-react';
import ru from '~/data/locales/ru.json';
import en from '~/data/locales/en.json';
import ModalStories, {
	events
} from '@flexis/ui/components/Modal/Modal.stories';
import Modal from './';
import {
	setAppElement
} from '@flexis/ui/components/Modal';

setAppElement('#root');

storiesOf('Components|Modal', module)
	.addParameters(ModalStories.parameters)
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
	.addDecorator(story => (
		<I18nProvider
			locale={select('Locale', ['en', 'ru'], 'en')}
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
		'with active state',
		() => (
			<Modal
				{...events}
				active={boolean('Active', true)}
			>
				Modal content.
			</Modal>
		)
	)
	.add(
		'with inactive state',
		() => (
			<Modal
				{...events}
				active={boolean('Active', false)}
			>
				Modal content.
			</Modal>
		)
	)
	.add(
		'with centered state',
		() => (
			<Modal
				{...events}
				active={boolean('Active', true)}
				centered={boolean('Centered', true)}
			>
				Modal content.
			</Modal>
		)
	)
	.add(
		'with custom button',
		() => (
			<Modal
				{...events}
				active={boolean('Active', true)}
				centered={boolean('Centered', true)}
				closeButton={<a>x</a>}
			>
				Modal content.
			</Modal>
		)
	);
