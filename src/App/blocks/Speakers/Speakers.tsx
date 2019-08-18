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
import Link from '~/components/Link';
import Button from '~/components/Button';
import ProfileCard from '~/components/ProfileCard';
import Badge from '~/components/Badge';
import stylesheet from './Speakers.st.css';

export type IProps = ISectionProps;

export default class Speakers extends Component<ISectionProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			context,
			props
		} = this;
		const {
			speakers: {
				speakers
			}
		} = this.context.getCatalog(
			context.getLocale()
		) as any;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<div
					{...stylesheet('group')}
				>
					<h2>
						{__x`speakers.title`}
					</h2>
					<Link
						{...stylesheet('link')}
						to='/'
						disguised
					>
						<Button
							variant='secondary'
						>
							{__x`speakers.cfp`}
						</Button>
					</Link>
				</div>
				<ul>
					{speakers.map(item => (
						<li
							key={item.src}
						>
							<ProfileCard
								{...item}
								badge={
									<Badge
										color='pink'
									>
										{item.badge}
									</Badge>
								}
							/>
						</li>
					))}
				</ul>
			</Section>
		);
	}
}
