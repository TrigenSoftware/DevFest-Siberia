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
import {
	omit
} from '@flexis/ui/helpers';
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

const routerProps = [
	'history',
	'location',
	'match',
	'staticContext'
];

export interface IProps extends ISectionProps, RouteComponentProps {}

interface IState {
	type: string;
}

export class Speakers extends Component<IProps, IState> {

	static contextType = I18nContext;

	static getDerivedStateFromProps(
		{
			location: {
				search
			}
		}: IProps
	) {

		let nextState: Partial<IState> = null;

		const type = new URLSearchParams(search).get('type');

		if (type) {
			nextState = {
				type
			};
		}

		return nextState;
	}

	context!: ContextType<typeof I18nContext>;

	state = {
		type: null
	};

	render() {

		const {
			context,
			props,
			state
		} = this;
		const {
			type
		} = state;
		const nav = getTalkTypes(context);
		const speakers = getSpeakers(context, type);

		return (
			<Section
				{...omit(props, routerProps)}
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
