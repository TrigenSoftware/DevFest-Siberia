import {
	parseISO,
	format
} from 'date-fns';
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
	talkTypeColors,
	VariantScheduleItemStatus
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

function getStatus(date: string, timeStart: string, timeEnd: string) {

	const currentDate = new Date();
	/* тестил вот так вот: currentDate = parseISO(`${date}T09:00:00`)
	или parseISO(`${date}T10:00:00`) и тд и вот так еще new Date('November 30, 2019 09:01:00'). */
	const startDate = parseISO(`${date}T${timeStart}:00`);
	const endDate = parseISO(`${date}T${timeEnd}:00`);

	if (currentDate > startDate && currentDate > endDate) {
		return VariantScheduleItemStatus.Past;
	}

	if (currentDate >= startDate && currentDate <= endDate) {
		return VariantScheduleItemStatus.Now;
	}

	if (currentDate < startDate) {
		return VariantScheduleItemStatus.Next;
	}
}

function formatDate(date: string, timeStart: string) {

	const startDate = parseISO(`${date}T${timeStart}:00`);

	return format(startDate, 'hh:mm a');
}

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
							status={getStatus(item.date, item.timeStart, item.timeEnd)}
							timeStart={formatDate(item.date, item.timeStart)}
						/>
					))}
				</Schedule>
			</Section>
		);
	}
}

export default withRouter(ScheduleContainer);
