import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	boolean
} from '@storybook/addon-knobs/react';
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
