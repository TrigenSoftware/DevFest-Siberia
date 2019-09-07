import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	getTeam
} from '~/services/i18n';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import ProfileCard from '~/components/ProfileCard';
import {
	style,
	classes
} from './Team.st.css';

export type IProps = ISectionProps;

export default class Team extends Component<ISectionProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			...props
		} = this.props;
		const {
			context
		} = this;
		const team = getTeam(context);

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<h2>
					{__x`team.title`}
				</h2>
				<ul
					className={classes.list}
				>
					{team.map(item => (
						<li
							key={item.src}
						>
							<ProfileCard
								{...item}
							/>
						</li>
					))}
				</ul>
			</Section>
		);
	}
}
