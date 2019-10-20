import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import {
	action
} from '@storybook/addon-actions';
import Schedule, {
	ScheduleItem,
	ScheduleSeparator,
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
					lang='RU'
					location={<span>Комната 231,<br/>2 этаж</span>}
					title='Открытие'
					status={VariantScheduleItemStatus.Past}
				/>
				<ScheduleItem
					time='9:30 AM'
					location={<span>Комната 231,<br/>2 этаж</span>}
					title='Регистрация'
					status={VariantScheduleItemStatus.Past}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					favorite
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					lang='RU'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Middle'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Junior'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					favorite={false}
					favoriteLabel='Favorite'
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
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					favorite={false}
					favoriteLabel='Favorite'
					onFavoriteClick={action('click')}
				/>
				<ScheduleSeparator>
					1 декабря
				</ScheduleSeparator>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					favorite={false}
					favoriteLabel='Favorite'
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
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					workshop={false}
					workshopAddLabel='Хочу пойти'
					onWorkshopAddClick={action('add')}
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					workshop
					workshopDisabled
					workshopDisabledLabel='Мест больше нет :('
				/>
				<ScheduleItem
					time='9:30 PM'
					location={<span>Комната 231,<br/>2 этаж</span>}
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
					talkLevelBadge='Senior'
					workshop
					workshopLabel='Я иду! : )'
					workshopDeleteLabel='Не пойти'
					onWorkshopDeleteClick={action('delete')}
				/>
			</Schedule>
		)
	);
