import faker from 'faker';
import React, {
	Component
} from 'react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import ProfileCard from '~/components/ProfileCard';
import {
	imageUrl
} from '@flexis/ui/components/ImageSelect/ImageSelect.stories';
import stylesheet from './Team.st.css';

export type IProps = ISectionProps;

export default class Team extends Component<ISectionProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<h2>Команда</h2>
				<ul>
					<li>
						<ProfileCard
							src={imageUrl}
							firstname='Имя'
							lastname='Фамилия'
							description='Роль, занятие, цель смысл'
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
