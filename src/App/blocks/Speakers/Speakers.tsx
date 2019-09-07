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
import {
	getSpeakers,
	getTalkTypes
} from '~/services/i18n';
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
	routeProps
} from '../common/router';
import {
	style,
	classes
} from './Speakers.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

export class Speakers extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			location: {
				search
			},
			...props
		} = this.props;
		const {
			context
		} = this;
		const type = new URLSearchParams(search).get('type');
		const nav = getTalkTypes(context);
		const speakers = getSpeakers(context, type);

		return (
			<Section
				{...omit(props, routeProps)}
				className={style(classes.root, className)}
			>
				<div
					className={classes.group}
				>
					<h2>
						{__x`speakers.title`}
					</h2>
					<Link
						className={classes.link}
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
					className={classes.nav}
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
					className={classes.list}
				>
					{speakers.map(item => (
						<li
							key={item.id}
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
								to={{
									pathname: `/speakers/${item.id}`,
									search
								}}
							/>
						</li>
					))}
				</ul>
			</Section>
		);
	}
}

export default withRouter(Speakers);
