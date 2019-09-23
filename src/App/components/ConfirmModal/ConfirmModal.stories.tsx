/* tslint:disable jsx-no-lambda */
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	action
} from '@storybook/addon-actions';
import {
	button
} from '@storybook/addon-knobs/react';
import ConfirmModalStories from '@flexis/ui/components/ConfirmModal/ConfirmModal.stories';
import Button from '../Button';
import ConfirmModal from './';

let confirmRef = null;

storiesOf('Components|ConfirmModal', module)
	.addParameters(ConfirmModalStories.parameters)
	.add(
		'with show demo',
		() => {

			button('Show', async () => {

				if (confirmRef) {
					action('confirm')(await confirmRef.show());
				}
			});

			return (
				<ConfirmModal
					elementRef={(ref) => {
						confirmRef = ref;
					}}
				>
					<div>
						Спасибо за покупку. Проверьте ваш имейл
					</div>
					<footer>
						<Button
							type='submit'
							color='primary'
						>
							Yes
						</Button>
						<Button
							type='reset'
							color='secondary'
						>
							No
						</Button>
					</footer>
				</ConfirmModal>
			);
		}
	);
