import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	text,
	boolean,
	select
} from '@storybook/addon-knobs/react';
import FormGroupStories, {
	events
} from '@flexis/ui/components/FormGroup/FormGroup.stories';
import {
	AlignSideValues
} from '../types';
import Input from '../Input';
import Checkbox from '../Checkbox';
import FormGroup from './';

storiesOf('Components|FormGroup', module)
	.addParameters(FormGroupStories.parameters)
	.add(
		'with label',
		() => (
			<FormGroup
				id='input-id'
				label={text('Label', 'Text label')}
			>
				<Input
					{...events}
					defaultValue=''
				/>
			</FormGroup>
		)
	)
	.add(
		'with description',
		() => (
			<FormGroup
				id='input-id'
				label={text('Label', 'Text label')}
				description={text('Description', 'Text description')}
			>
				<Input
					{...events}
					defaultValue=''
				/>
			</FormGroup>
		)
	)
	.add(
		'with notice',
		() => (
			<FormGroup
				id='input-id'
				label={text('Label', 'Text label')}
				description={text('Description', 'Text description')}
				notice={text('Notice', 'Text notice')}
			>
				<Input
					{...events}
					defaultValue=''
				/>
			</FormGroup>
		)
	)
	.add(
		'with required state',
		() => (
			<FormGroup
				id='input-id'
				label={text('Label', 'Text label')}
				description={text('Description', 'Text description')}
			>
				<Input
					{...events}
					required={boolean('Required', true)}
					defaultValue=''
				/>
			</FormGroup>
		)
	)
	.add(
		'with custom label',
		() => (
			<FormGroup
				id='input-id'
				label={(
					<b>
						{text('Label', 'Custom label')}
					</b>
				)}
			>
				<Input
					{...events}
					defaultValue=''
				/>
			</FormGroup>
		)
	)
	.add(
		'with checkbox',
		() => (
			<FormGroup
				id='input-id'
				label={text('Label', 'Text label')}
				flex={false}
			>
				<Checkbox
					{...events}
				/>
			</FormGroup>
		)
	)
	.add(
		'with disabled state',
		() => (
			<FormGroup
				id='input-id'
				alignIcon={select('Align icon', AlignSideValues, 'left')}
				label={text('Label', 'Text label')}
				description={text('Description', 'Text description')}
			>
				<Input
					{...events}
					disabled={boolean('Disabled', true)}
					defaultValue=''
				/>
			</FormGroup>
		)
	);
