import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	action
} from '@storybook/addon-actions';
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
					status={VariantScheduleItemStatus.Past}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='Mobile'
					talkLevelBadge='Middle'
					onFavoriteClick={action('click')}
					favorite
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='All'
					talkLevelBadge='Middle'
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='Data Science'
					talkLevelBadge='Middle'
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='DevOps'
					talkLevelBadge='Middle'
					onFavoriteClick={action('click')}
					favorite
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='Security'
					talkLevelBadge='Middle'
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					statusLabel='Идет сейчас'
					talkTypeBadge='Web'
					talkLevelBadge='Middle'
					onFavoriteClick={action('click')}
					favorite
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='All'
					talkLevelBadge='Senior'
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite={false}
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='Data Science'
					talkLevelBadge='Middle'
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite={false}
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='DevOps'
					talkLevelBadge='Middle'
					onFavoriteClick={action('click')}
					favorite={false}
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='Security'
					talkLevelBadge='Junior'
					onFavoriteClick={action('click')}
					favorite={false}
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='Backend'
					talkLevelBadge='Senior'
					onFavoriteClick={action('click')}
					favorite={false}
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='Hype'
					talkLevelBadge='Senior'
					onFavoriteClick={action('click')}
					favorite={false}
				/>
				<ScheduleItem
					time='9:30 PM'
					location='Комната 231, 2 этаж'
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speaker='Иван Петров'
					description='Старший инженер компании "Копыта", Павловск'
					talkTypeBadge='Web'
					talkLevelBadge='Senior'
					onFavoriteClick={action('click')}
					favorite={false}
				/>
			</Schedule>
		)
	);
