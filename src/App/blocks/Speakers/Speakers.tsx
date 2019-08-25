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
				<ToggleNav>
					<ToggleNavLink
						to='/all'
					>
						{__x`speakers.all`}
					</ToggleNavLink>
					<ToggleNavLink
						to='/mobile'
					>
						{__x`speakers.mobile`}
					</ToggleNavLink>
					<ToggleNavLink
						to='/web'
					>
						{__x`speakers.web`}
					</ToggleNavLink>
					<ToggleNavLink
						to='/ai'
					>
						{__x`speakers.ai`}
					</ToggleNavLink>
				</ToggleNav>
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
				<ul
					{...stylesheet('list')}
				>
					{speakers.map(item => (
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
								to='/some-id'
							/>
						</li>
					))}
				</ul>
			</Section>
		);
	}
}
