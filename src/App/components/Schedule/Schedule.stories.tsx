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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
				/>
				<ScheduleSeparator>
					30 ноября
				</ScheduleSeparator>
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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite
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
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite={false}
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
					onFavoriteClick={action('click')}
					favorite={false}
				/>
			</Schedule>
		)
	);
