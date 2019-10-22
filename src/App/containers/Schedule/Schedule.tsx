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
	getScheduleDate,
	getScheduleTypes,
	getSchedule
} from '~/services/i18n';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
import Badge from '~/components/Badge';
import Schedule, {
	ScheduleItem,
	talkTypeColors
} from '~/components/Schedule';
import {
	routeProps,
	addSearchParams
} from '~/blocks/common/router';
import {
	style,
	classes
} from './Schedule.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

export class ScheduleContainer extends Component<IProps> {

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
		const date = new URLSearchParams(search).get('date');
		const type = new URLSearchParams(search).get('type');
		const nav = getScheduleDate(context);
		const filter = getScheduleTypes(context);
		const schedule = getSchedule(context, date, type);

		return (
			<Section
				{...omit(props, routeProps)}
				className={style(classes.root, className)}
			>
				<h2
					className={classes.title}
				>
					{__x`schedule.title`}
				</h2>
				<ToggleNav
					className={classes.nav}
				>
					{nav.map(item => (
						<ToggleNavLink
							key={item.date}
							to={{
								pathname: '/schedule',
								search: addSearchParams(search, {
									date: item.date
								})
							}}
						>
							{item.label}
						</ToggleNavLink>
					))}
				</ToggleNav>
				<div
					className={classes.group}
				>
					<div
						className={classes.filterTitle}
					>
						{__x`schedule.filter.title`}:
					</div>
					<ToggleNav
						className={classes.filter}
					>
						{filter.map(item => (
							<ToggleNavLink
								key={item.type}
								to={{
									pathname: '/schedule',
									search: addSearchParams(search, {
										type: item.type
									})
								}}
							>
								<Badge
									variant='fill'
									color={talkTypeColors[item.type]}
								>
									{item.label}
								</Badge>
							</ToggleNavLink>
						))}
					</ToggleNav>
				</div>
				<Schedule>
					{schedule && schedule.map(item => (
						<ScheduleItem
							key={item.title}
							{...item}
						/>
					))}
				</Schedule>
			</Section>
		);
	}
}

export default withRouter(ScheduleContainer);
