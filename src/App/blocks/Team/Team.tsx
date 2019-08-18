import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import ProfileCard from '~/components/ProfileCard';
import stylesheet from './Team.st.css';

export type IProps = ISectionProps;

export default class Team extends Component<ISectionProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			context,
			props
		} = this;
		const {
			team: {
				team
			}
		} = this.context.getCatalog(
			context.getLocale()
		) as any;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<h2>
					{__x`team.title`}
				</h2>
				<ul>
					{team.map(({
						src,
						firstname,
						lastname,
						description,
						contacts
					}) => (
						<li
							key={lastname}
						>
							<ProfileCard
								key={lastname}
								src={src}
								firstname={firstname}
								lastname={lastname}
								description={description}
								contacts={contacts}
							/>
						</li>
					))}
				</ul>
			</Section>
		);
	}
}
