// tslint:disable: no-magic-numbers jsx-no-lambda
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	text,
	boolean
} from '@storybook/addon-knobs/react';
import InputStories, {
	events
} from '@flexis/ui/components/Input/Input.stories';
import Input from './';

storiesOf('Components|Input', module)
	.addParameters(InputStories.parameters)
	.add(
		'with default state',
		() => (
			<Input
				{...events}
				placeholder={text('Placeholder', '')}
				disabled={boolean('Disabled', false)}
			/>
		)
	)
	.add(
		'with invalid state',
		() => (
			<Input
				{...events}
				type='number'
				defaultValue={10}
				max={5}
			/>
		)
	)
	.add(
		'with default value',
		() => (
			<Input
				{...events}
				placeholder={text('Placeholder', '')}
				disabled={boolean('Disabled', false)}
				defaultValue='Default value'
			/>
		)
	)
	.add(
		'with value',
		() => (
			<Input
				{...events}
				placeholder={text('Placeholder', '')}
				disabled={boolean('Disabled', false)}
				value={text('Value', 'Value')}
			/>
		)
	)
	.add(
		'with mask',
		() => (
			<Input
				{...events}
				placeholder={text('Placeholder', '')}
				mask={text('Mask', '+7 (999) 999-99-99')}
				disabled={boolean('Disabled', false)}
				defaultValue='+7 (913) 421-04-04'
			/>
		)
	);
