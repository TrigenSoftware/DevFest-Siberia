import faker from 'faker';
import React, {
	Component
} from 'react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Button from '~/components/Button';
import ProfileCard from '~/components/ProfileCard';
import Badge from '~/components/Badge';
import {
	imageUrl
} from '@flexis/ui/components/ImageSelect/ImageSelect.stories';
import stylesheet from './Speakers.st.css';

export type IProps = ISectionProps;

export default class Speakers extends Component<ISectionProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<div
					{...stylesheet('group')}
				>
					<h2>Спикеры</h2>
					<Button
						{...stylesheet('button')}
						variant='secondary'
					>
						Стать спикером
					</Button>
				</div>
				<ul>
					<li>
						<ProfileCard
							src={imageUrl}
							firstname='Имя'
							lastname='Фамилия'
							description='Роль, занятие, цель смысл'
							badge={
								<Badge
									color='pink'
								>
									GDE
								</Badge>
							}
							contacts={{
								twitter: faker.internet.url(),
								vk:      faker.internet.url()
							}}
						/>
					</li>
					<li>
						<ProfileCard
							src={imageUrl}
							firstname='Имя'
							lastname='Фамилия'
							description='Роль, занятие, цель смысл'
							badge={
								<Badge
									color='pink'
								>
									GDE
								</Badge>
							}
							contacts={{
								twitter: faker.internet.url(),
								vk:      faker.internet.url()
							}}
						/>
					</li>
					<li>
						<ProfileCard
							src={imageUrl}
							firstname='Имя'
							lastname='Фамилия'
							description='Роль, занятие, цель смысл'
							badge={
								<Badge
									color='pink'
								>
									GDE
								</Badge>
							}
							contacts={{
								twitter: faker.internet.url(),
								vk:      faker.internet.url()
							}}
						/>
					</li>
					<li>
						<ProfileCard
							src={imageUrl}
							firstname='Имя'
							lastname='Фамилия'
							description='Роль, занятие, цель смысл'
							badge={
								<Badge
									color='pink'
								>
									GDE
								</Badge>
							}
							contacts={{
								twitter: faker.internet.url(),
								vk:      faker.internet.url()
							}}
						/>
					</li>
					<li>
						<ProfileCard
							src={imageUrl}
							firstname='Имя'
							lastname='Фамилия'
							description='Роль, занятие, цель смысл'
							badge={
								<Badge
									color='pink'
								>
									GDE
								</Badge>
							}
							contacts={{
								twitter: faker.internet.url(),
								vk:      faker.internet.url()
							}}
						/>
					</li>
					<li>
						<ProfileCard
							src={imageUrl}
							firstname='Имя'
							lastname='Фамилия'
							description='Роль, занятие, цель смысл'
							badge={
								<Badge
									color='pink'
								>
									GDE
								</Badge>
							}
							contacts={{
								twitter: faker.internet.url(),
								vk:      faker.internet.url()
							}}
						/>
					</li>
				</ul>
			</Section>
		);
	}
}
