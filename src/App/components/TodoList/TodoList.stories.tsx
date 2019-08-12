/* tslint:disable:no-magic-numbers */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	action
} from '@storybook/addon-actions';
import {
	button,
	number
} from '@storybook/addon-knobs/react';
import {
	getFakeData
} from './TodoListItem/TodoListItem.mock';
import TodoList, {
	TodoListItem
} from './';

const events = {
	onAdd: action('add'),
	onChange: action('change'),
	onDelete: action('delete')
};

const stylableApi = `
Stylable API
---
_Empty_
`;

storiesOf('TodoList', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with basic data',
		() => {

			button('Generate new data', () => {});

			return (
				<TodoList
					{...events}
				>
					{Array.from({
						length: number('Items count', 3)
					}).map(() => {

						const fakeItem = getFakeData();

						return (
							<TodoListItem
								key={fakeItem.id}
								id={fakeItem.id}
								value={fakeItem.value}
							/>
						);
					})}
				</TodoList>
			);
		}
	);
