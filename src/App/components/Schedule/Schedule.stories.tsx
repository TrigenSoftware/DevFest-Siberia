import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import Schedule, {
	ScheduleItem,
	VariantScheduleItemStatus
} from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Components|Schedule', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with default state',
		() => (
			<Schedule>
				<ScheduleItem
					time='9:30 AM'
					location='Холл, 1 этаж'
					title='Открытие'
					status={VariantScheduleItemStatus.Past}
				/>
				<ScheduleItem
					time='9:30 AM'
					location='Холл, 1 этаж'
					title='Регистрация'
					status={VariantScheduleItemStatus.Past}
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='Mobile'
					talkLevelBadge='Middle'
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='Frontend'
					talkLevelBadge='Middle'
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='Hype'
					talkLevelBadge='Middle'
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='Backend'
					talkLevelBadge='Middle'
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='Mobile'
					talkLevelBadge='Middle'
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='Frontend'
					talkLevelBadge='Middle'
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='Backend'
					talkLevelBadge='Middle'
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='Hype'
					talkLevelBadge='Middle'
				/>
			</Schedule>
		)
	);
