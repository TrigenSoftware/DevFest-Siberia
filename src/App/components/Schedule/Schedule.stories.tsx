import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	action
} from '@storybook/addon-actions';
import Schedule, {
	ScheduleItem,
	VariantScheduleItemStatus,
	ScheduleSeparator
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
					lang='RU'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Открытие'
					status={VariantScheduleItemStatus.Past}
				/>
				<ScheduleItem
					time='9:30 AM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Регистрация'
					status={VariantScheduleItemStatus.Past}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Past}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='Mobile'
					talkLevelBadge='Intermediate'
					favorite
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='All'
					talkLevelBadge='Intermediate'
					favorite
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='Mobile'
					talkLevelBadge='Intermediate'
					favorite
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='Data Science'
					talkLevelBadge='Intermediate'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='Frontend'
					talkLevelBadge='Intermediate'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='DevOps'
					talkLevelBadge='Intermediate'
					favorite
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='Security'
					talkLevelBadge='Intermediate'
					favorite
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speakers={[
						{
							name:        'Иван Петров',
							description: 'Инженер'
						},
						{
							name:        'Jhon Doe',
							description: 'Инженер'
						},
						{
							name:        'Doe Jhon',
							description: 'Инженер'
						},
						{
							name:        'Jane Doe',
							description: 'Инженер'
						},
						{
							name:        'Max Doe',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='Backend'
					talkLevelBadge='Intermediate'
					favorite
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='Hype'
					talkLevelBadge='Intermediate'
					favorite
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Now}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					statusLabel='Идет сейчас'
					talkTypeBadge='Web'
					talkLevelBadge='Intermediate'
					favorite
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='All'
					talkLevelBadge='Advanced'
					favorite
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Mobile'
					talkLevelBadge='Intermediate'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Data Science'
					talkLevelBadge='Intermediate'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Frontend'
					talkLevelBadge='Intermediate'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='DevOps'
					talkLevelBadge='Intermediate'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Security'
					talkLevelBadge='Beginner'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Backend'
					talkLevelBadge='Advanced'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Hype'
					talkLevelBadge='Advanced'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Web'
					talkLevelBadge='Advanced'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
			</Schedule>
		)
	)
	.add(
		'with separator',
		() => (
			<Schedule>
				<ScheduleSeparator>
					30 ноября
				</ScheduleSeparator>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Web'
					talkLevelBadge='Advanced'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Web'
					talkLevelBadge='Advanced'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
				<ScheduleSeparator>
					1 декабря
				</ScheduleSeparator>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Кодить сегодня или нет'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Web'
					talkLevelBadge='Advanced'
					favorite={false}
					onFavoriteClick={action('click')}
				/>
			</Schedule>
		)
	)
	.add(
		'with workshops',
		() => (
			<Schedule>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Как делать пирамидку?'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Web'
					talkLevelBadge='Advanced'
					workshop={false}
					onWorkshopAddClick={action('add')}
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Как делать пирамидку?'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Web'
					talkLevelBadge='Advanced'
					workshop
					workshopDisabled
				/>
				<ScheduleItem
					time='9:30 PM'
					place={<span>Комната 231,<br/>2 этаж</span>}
					title='Как делать пирамидку?'
					status={VariantScheduleItemStatus.Next}
					speakers={[
						{
							name:        'Иван',
							description: 'Инженер'
						},
						{
							name:        'Иван Петров',
							description: 'Инженер'
						}
					]}
					talkTypeBadge='Web'
					talkLevelBadge='Advanced'
					workshop
					onWorkshopDeleteClick={action('delete')}
				/>
			</Schedule>
		)
	);
