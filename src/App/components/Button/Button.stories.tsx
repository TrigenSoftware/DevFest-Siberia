import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	text,
	boolean,
	select
} from '@storybook/addon-knobs/react';
import ButtonStories, {
	events
} from '@flexis/ui/components/Button/Button.stories';
import {
	AlignSideValues
} from '../types';
import Button, {
	VariantValues
} from './';

const {
	TestIcon
} = global as any;

storiesOf('Components|Button', module)
	.addParameters(ButtonStories.parameters)
	.add(
		'with text',
		() => (
			<Button
				{...events}
				disabled={boolean('Disabled', false)}
				variant={select('Variant', [null, ...VariantValues], null)}
			>
				{text('Label', 'Button name')}
			</Button>
		)
	)
	.add(
		'with icon',
		() => (
			<Button
				{...events}
				disabled={boolean('Disabled', false)}
				icon={<TestIcon/>}
				alignIcon={select('Align icon', AlignSideValues, AlignSideValues[0])}
				variant={select('Variant', [null, ...VariantValues], null)}
			>
				{text('Label', 'Button name')}
			</Button>
		)
	)
	.add(
		'with icon only',
		() => (
			<Button
				{...events}
				disabled={boolean('Disabled', false)}
				icon={<TestIcon/>}
				alignIcon={select('Align icon', AlignSideValues, AlignSideValues[0])}
				variant={select('Variant', [null, ...VariantValues], null)}
			/>
		)
	)
	.add(
		'with right aligned icon',
		() => (
			<Button
				{...events}
				disabled={boolean('Disabled', false)}
				icon={<TestIcon/>}
				alignIcon={select('Align icon', AlignSideValues, 'right')}
				variant={select('Variant', [null, ...VariantValues], null)}
			>
				{text('Label', 'Button name')}
			</Button>
		)
	)
	.add(
		'with flex icon',
		() => (
			<Button
				{...events}
				style={{ width: '250px' }}
				disabled={boolean('Disabled', false)}
				icon={<TestIcon/>}
				alignIcon={select('Align icon', AlignSideValues, AlignSideValues[0])}
				flexIcon={boolean('Flex icon', true)}
				variant={select('Variant', [null, ...VariantValues], null)}
			>
				{text('Label', 'Button name')}
			</Button>
		)
	);
