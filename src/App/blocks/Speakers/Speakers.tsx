import React, {
	ContextType,
	Component
} from 'react';
import {
	RouteComponentProps,
	withRouter
} from 'react-router-dom';
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
	getSpeakers,
	getTalkTypes
} from '../common/i18n';
import stylesheet from './Speakers.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

export class Speakers extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			context,
			props: {
				history,
				location,
				match,
				staticContext,
				...props
			}
		} = this;
		const type = new URLSearchParams(location.search).get('type');
		const nav = getTalkTypes(context);
		const speakers = getSpeakers(context, type);

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
								to={`/speakers/${item.id}`}
							/>
						</li>
					))}
				</ul>
			</Section>
		);
	}
}

export default withRouter(Speakers);
