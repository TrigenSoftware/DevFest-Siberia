/* tslint:disable:no-magic-numbers */
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
	getSpeakers
} from '~/services/i18n';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import ProfileCard from '~/components/ProfileCard';
import Link from '~/components/Link';
import Badge from '~/components/Badge';
import {
	routeProps,
	addSearchParams
} from '../common/router';
import {
	style,
	classes
} from './SpeakersPromo.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

export class SpeakersPromo extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			context
		} = this;
		const {
			className,
			location: {
				search
			},
			...props
		} = this.props;
		const speakers = getSpeakers(context);

		return (
			<Section
				{...omit(props, routeProps)}
				className={style(classes.root, className)}
			>
				<Link
					className={classes.title}
					to='/speakers'
				>
					{__x`speakers.title`}
				</Link>
				<ul
					className={classes.list}
				>
					{speakers.slice(0, 3).map(item => (
						<li
							key={item.id}
						>
							<ProfileCard
								src={item.src}
								firstname={item.firstname}
								lastname={item.lastname}
								description={item.description}
								location={item.location}
								badge={item.badge && (
									<Badge
										color='pink'
									>
										{item.badge}
									</Badge>
								)}
								to={{
									pathname: '/',
									search:   addSearchParams(search, {
										id: item.id
									})
								}}
							/>
						</li>
					))}
				</ul>
			</Section>
		);
	}
}

export default withRouter(SpeakersPromo);
