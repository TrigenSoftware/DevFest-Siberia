import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	text,
	select
} from '@storybook/addon-knobs/react';
import BadgeStories from '@flexis/ui/components/Badge/Badge.stories';
import {
	extendInfo
} from '@flexis/ui/helpers/stories';
import {
	PlacementValues,
	AlignValues
} from '../types';
import Badge, {
	BadgeContainer,
	VariantValues,
	ColorValues
} from './';

const {
	TestIcon
} = global as any;

export const parameters = extendInfo(
	BadgeStories.parameters,
	[
		{
			values: VariantValues,
			prefix: ':'
		},
		{
			values: ColorValues,
			prefix: ':'
		}
	]
);

storiesOf('Components|Badge', module)
	.addParameters(parameters)
	.add(
		'with text',
		() => (
			<Badge
				variant={select('Variant', [...VariantValues], VariantValues[1])}
				color={select('Color', [null, ...ColorValues], ColorValues[0])}
			>
				{text('Content', 'GDG')}
			</Badge>
		)
	)
	.add(
		'with container',
		() => (
			<BadgeContainer
				placement={select('Placement', PlacementValues, PlacementValues[0])}
				align={select('Align', AlignValues, AlignValues[0])}
			>
				<TestIcon
					width='32px'
					height='32px'
				/>
				<Badge
					variant={select('Variant', [...VariantValues], VariantValues[1])}
					color={select('Color', [null, ...ColorValues], ColorValues[0])}
				>
					{text('Content', 'GDG')}
				</Badge>
			</BadgeContainer>
		)
	);
