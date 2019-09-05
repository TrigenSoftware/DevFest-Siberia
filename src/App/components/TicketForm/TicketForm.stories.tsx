import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	MemoryRouter
} from 'react-router';
import {
	text
} from '@storybook/addon-knobs/react';
import {
	action
} from '@storybook/addon-actions';
import {
	events
} from '@flexis/ui/components/FormGroup/FormGroup.stories';
import {
	events as buttonEvents
} from '@flexis/ui/components/Button/Button.stories';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Link from '../Link';
import TicketForm, {
	TicketFormGroup,
	TicketFormRow,
	TicketFormLabel,
	TicketFormFooter
} from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Components|TicketForm', module)
	.addParameters({
		info: stylableApi
	})
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>
			{story()}
		</MemoryRouter>
	))
	.addDecorator(story => (
		<div style={{ margin: '-12px' }}>
			{story()}
		</div>
	))
	.add(
		'with buy one ticket',
		() => (
			<TicketForm
				onSubmit={action('submit')}
			>
				<FormGroup
					id='firstname'
					label='Имя'
				>
					<Input
						{...events}
						id='firstname'
						placeholder='Имя'
					/>
				</FormGroup>
				<FormGroup
					id='lastname'
					label='Фамилия'
				>
					<Input
						{...events}
						id='lastname'
						placeholder='Фамилия'
					/>
				</FormGroup>
				<FormGroup
					id='position'
					label='Должность'
				>
					<Input
						{...events}
						id='position'
						placeholder='Должность'
					/>
				</FormGroup>
				<FormGroup
					id='company'
					label='Компания'
				>
					<Input
						{...events}
						id='company'
						placeholder='Компания'
					/>
				</FormGroup>
				<FormGroup
					id='city'
					label='Город'
				>
					<Input
						{...events}
						id='city'
						placeholder='Город'
					/>
				</FormGroup>
				<FormGroup
					id='email'
					label='Почта'
					notice={text('Description', 'Сюда мы пришлем билет : )')}
				>
					<Input
						{...events}
						id='email'
						placeholder='Почта'
					/>
				</FormGroup>
				<FormGroup
					label='Аффтепати'
					flex={false}
				>
					<TicketFormGroup>
						<Checkbox
							{...events}
							id='party'
						/>
						<TicketFormLabel
							htmlFor='party'
						>
							Я пойду <span>+1500Р</span>
						</TicketFormLabel>
					</TicketFormGroup>
				</FormGroup>
				<TicketFormFooter>
					<Button
						{...buttonEvents}
						variant='secondary'
					>
						Купить
					</Button>
					<TicketFormGroup>
						<Checkbox
							{...events}
							id='policy'
						/>
						<TicketFormLabel
							htmlFor='policy'
						>
							Accept <Link to='/terms'>Terms</Link>
						</TicketFormLabel>
					</TicketFormGroup>
				</TicketFormFooter>
			</TicketForm>
		)
	)
	.add(
		'with buy company ticket',
		() => (
			<TicketForm
				onSubmit={action('submit')}
			>
				<FormGroup
					id='name'
					label='Название компании:'
				>
					<Input
						{...events}
						id='name'
						placeholder='Название компании'
					/>
				</FormGroup>
				<FormGroup
					id='email'
					label='Почта'
				>
					<Input
						{...events}
						id='email'
						placeholder='Почта'
					/>
				</FormGroup>
				<TicketFormRow>
					<FormGroup
						label='Билеты'
						flex={false}
					>
						<Input
							{...events}
							id='tickets'
							type='number'
						/>
					</FormGroup>
					<FormGroup
						label='Аффтепати'
						flex={false}
					>
						<TicketFormGroup>
							<Checkbox
								{...events}
								id='party'
							/>
							<TicketFormLabel
								htmlFor='party'
							>
								Добавить
							</TicketFormLabel>
						</TicketFormGroup>
					</FormGroup>
				</TicketFormRow>
				<TicketFormFooter>
					<Button
						{...buttonEvents}
						variant='secondary'
					>
						Запросить счет
					</Button>
					<TicketFormGroup>
						<Checkbox
							{...events}
							id='policy'
						/>
						<TicketFormLabel
							htmlFor='policy'
						>
							Accept <Link to='/terms'>Terms</Link>
						</TicketFormLabel>
					</TicketFormGroup>
				</TicketFormFooter>
			</TicketForm>
		)
	);
