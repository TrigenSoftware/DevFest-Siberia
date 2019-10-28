/* tslint:disable:no-magic-numbers */
import {
	parseISO,
	format
} from 'date-fns';
import React, {
	ContextType,
	Component
} from 'react';
import {
	withRouter
} from 'react-router-dom';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	omit,
	Bind
} from '@flexis/ui/helpers';
import {
	getScheduleDate,
	getScheduleTypes,
	getSchedule
} from '~/services/i18n';
import Section from '~/components/Section';
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
import Badge, {
	VariantVariant
} from '~/components/Badge';
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
	IProps,
	IState
} from './types';
import {
	style,
	classes
} from './Schedule.st.css';

const UPDATE_INTERVAL = 3000;

function formatDate(date: string, timeStart: string) {

	const startDate = parseISO(`${date}T${timeStart}:00`);
	const [
		time,
		formatType
	] = format(startDate, 'hh:mm a').split(' ');

	return (
		<>
			{time}
			<span>{' '}{formatType}</span>
		</>
	);
}

function getVariant(type: string) {

	switch (type) {

		case 'junior':
		case 'middle':
		case 'senior':
			return VariantVariant.Outline;

		default:
			return VariantVariant.Fill;
	}
}

export class ScheduleContainer extends Component<IProps, IState> {

	static contextType = I18nContext;

	static getDerivedStateFromProps(
		{
			datetime
		}: IProps
	) {

		if (datetime) {
			return {
				currentDate: datetime
			};
		}

		return {
			currentDate: new Date()
		};
	}

	context!: ContextType<typeof I18nContext>;

	updateIntervalId: any = null;

	state = {
		currentDate: null
	};

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
		const params = new URLSearchParams(search);
		const date = params.get('date');
		const type = params.get('type');
		const nav = getScheduleDate(context);
		const filter = getScheduleTypes(context);
		const schedule = getSchedule(context, date, type);

		return (
			<Section
				{...omit(props, [
					...routeProps,
					'datetime'
				])}
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
					{nav.map(({
						date,
						label
					}) => (
						<ToggleNavLink
							key={date}
							to={{
								pathname: '/schedule',
								search: addSearchParams(search, {
									date
								})
							}}
						>
							{label}
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
						{filter.map(({
							type,
							label
						}) => (
							<ToggleNavLink
								key={type}
								to={{
									pathname: '/schedule',
									search: addSearchParams(search, {
										type
									})
								}}
							>
								<Badge
									variant={getVariant(type)}
									color={talkTypeColors[type]}
								>
									{label}
								</Badge>
							</ToggleNavLink>
						))}
					</ToggleNav>
				</div>
				<Schedule>
					{schedule && schedule.map((item) => {

						const {
							title,
							date,
							timeStart,
							timeEnd
						} = item;

						return (
							<ScheduleItem
								key={title}
								{...item}
								time={formatDate(date, timeStart)}
								status={this.getStatus(date, timeStart, timeEnd)}
							/>
						);
					})}
				</Schedule>
			</Section>
		);
	}

	componentDidMount() {

		const {
			history,
			location: {
				search
			},
			datetime
		} = this.props;
		const {
			currentDate
		} = this.state;
		const {
			context
		} = this;
		const date = new URLSearchParams(search).get('date');

		if (!datetime) {

			this.updateIntervalId = setInterval(this.updateDate, UPDATE_INTERVAL);
		}

		if (!date) {

			getScheduleDate(context).some(({ date }) => {

				if (currentDate <= new Date(date)) {

					history.push({
						search: addSearchParams(search, {
							date
						})
					});
					return true;
				}
			});
		}
	}

	componentWillUnmount() {
		clearInterval(this.updateIntervalId);
	}

	@Bind()
	private updateDate() {
		this.setState(() => ({
			currentDate: new Date()
		}));
	}

	private getStatus(date: string, timeStart: string, timeEnd: string) {

		const {
			currentDate
		} = this.state;
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
}

export default withRouter(ScheduleContainer);
