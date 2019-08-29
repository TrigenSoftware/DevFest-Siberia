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
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
import Link from '~/components/Link';
import Button from '~/components/Button';
import ProfileCard from '~/components/ProfileCard';
import Badge from '~/components/Badge';
import {
	getSpeakers
} from '../common/i18n';
import stylesheet from './Speakers.st.css';

export type IProps = ISectionProps;

export default class Speakers extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			context,
			props
		} = this;
		const speakers = getSpeakers(context);
		const {
			speakers: {
				nav
			}
		} = this.context.getCatalog(
			context.getLocale()
		) as any;
		const type = new URLSearchParams(location.search).get('type');
		let filtredSpeakers = null;

		switch (type) {

			case 'mobile':
			case 'web':
			case 'ai':
				filtredSpeakers = speakers.filter(speaker => speaker.type === type);
				break;

			default:
				filtredSpeakers = speakers;
		}

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
						href='https://www.papercall.io/dfsiberia19'
						target='_blank'
						disguised
					>
						<Button
							variant='secondary'
						>
							{__x`speakers.cfp`}
						</Button>
					</Link>
				</div>
				<ToggleNav
					{...stylesheet('nav')}
				>
					{nav.map(item => (
						<ToggleNavLink
							key={item.type}
							to={`/speakers?type=${item.type}`}
						>
							{item.label}
						</ToggleNavLink>
					))}
				</ToggleNav>
				<ul
					{...stylesheet('list')}
				>
					{filtredSpeakers.map(item => (
						<li
							key={item.src}
						>
							<ProfileCard
								{...item}
								badge={item.badge && (
									<Badge
										color='pink'
									>
										{item.badge}
									</Badge>
								)}
								to={`/speakers/${item.id}`}
							/>
						</li>
					))}
				</ul>
			</Section>
		);
	}
}
