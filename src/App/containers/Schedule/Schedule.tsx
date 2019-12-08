/* tslint:disable:no-magic-numbers */
import {
	parseISO,
	isSameDay,
	format
} from 'date-fns';
import React, {
	ContextType,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	withRouter
} from 'react-router-dom';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	Bind
} from '@flexis/ui/helpers';
import {
	getLocalizedPath,
	getScheduleDates,
	getScheduleTypes
} from '~/services/i18n';
import Section from '~/components/Section';
import SpeakerModal from '~/blocks/SpeakerModal';
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
import Badge from '~/components/Badge';
import Schedule, {
	ScheduleItem,
	talkTypeColors,
	VariantScheduleItemStatus
} from '~/components/Schedule';
import Loading from '~/components/Loading';
import {
	addSearchParams
} from '~/blocks/common/router';
import ScheduleDescriptionModal from './ScheduleDescriptionModal';
import {
	IProps,
	IState
} from './types';
import {
	style,
	classes
} from './Schedule.st.css';

const UPDATE_INTERVAL = 30000;

function formatDate(date: string, timeStart: string) {

	const startDate = parseISO(`${date}T${timeStart}:00`);
	const [
		time,
		formatType
	] = format(startDate, 'H:mm').split(' ');

	return (
		<>
			{time}
			<span>{' '}{formatType}</span>
		</>
	);
}

export class ScheduleContainer extends Component<IProps, IState> {

	static contextType = I18nContext;

	static propTypes = {
		datetime:             PropTypes.any,
		fetchSchedule:        PropTypes.func.isRequired,
		selectScheduleByType: PropTypes.func.isRequired,
		fetchSpeakers:        PropTypes.func.isRequired,
		selectSpeaker:        PropTypes.func.isRequired,
		fetchFavorites:       PropTypes.func.isRequired,
		addFavorite:          PropTypes.func.isRequired,
		deleteFavorite:       PropTypes.func.isRequired,
		selectIsFavorite:     PropTypes.func.isRequired,
		fetchReservations:    PropTypes.func.isRequired,
		addReservation:       PropTypes.func.isRequired,
		deleteReservation:    PropTypes.func.isRequired,
		selectIsReserved:     PropTypes.func.isRequired,
		isLogged:             PropTypes.func.isRequired
	};

	static getDerivedStateFromProps(
		{
			datetime
		}: IProps,
		{
			currentDate
		}: IState
	) {

		let nextState: Partial<IState> = null;

		if (datetime && datetime !== currentDate) {
			nextState = {
				currentDate: datetime
			};
		}

		return nextState;
	}

	context!: ContextType<typeof I18nContext>;
	updateIntervalId: any = null;
	state = {
		currentDate: new Date()
	};

	render() {

		const {
			className,
			location,
			history,
			schedule,
			actionsReady,
			selectScheduleByType,
			selectSpeaker
		} = this.props;
		const {
			search
		} = location;
		const {
			context
		} = this;
		const nav = getScheduleDates(context);
		const filterTypes = getScheduleTypes(context);
		const params = new URLSearchParams(search);
		const date = params.get('date') || nav[0].date;
		const type = params.get('type');
		const scheduleByType = selectScheduleByType(date, type);

		return (
			<Section
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
								pathname: getLocalizedPath(context, '/schedule'),
								search:   addSearchParams(search, {
									date
								})
							}}
						>
							{label}
						</ToggleNavLink>
					))}
				</ToggleNav>
				<div
					className={classes.filter}
				>
					<div
						className={classes.filterTitle}
					>
						{__x`schedule.filter.title`}:
					</div>
					<ToggleNav
						className={classes.filterNav}
					>
						{filterTypes.map(({
							type,
							label
						}) => (
							<ToggleNavLink
								key={type}
								to={{
									pathname: getLocalizedPath(context, '/schedule'),
									search:   addSearchParams(search, {
										type
									})
								}}
							>
								<Badge
									variant='fill'
									color={talkTypeColors[type]}
								>
									{label}
								</Badge>
							</ToggleNavLink>
						))}
					</ToggleNav>
				</div>
				{actionsReady ? (
					<Schedule>
						{scheduleByType.map((item, i) => {

							const {
								location,
								date,
								timeStart,
								timeEnd
							} = item;

							return (
								<ScheduleItem
									key={i}
									{...item}
									place={location}
									time={formatDate(date, timeStart)}
									status={this.getStatus(date, timeStart, timeEnd)}
								/>
							);
						})}
						<SpeakerModal
							getSpeaker={selectSpeaker}
						/>
					</Schedule>
				) : (
					<Loading/>
				)}
				<ScheduleDescriptionModal
					location={location}
					history={history}
					schedule={schedule}
				/>
			</Section>
		);
	}

	componentDidMount() {

		const {
			history,
			location: {
				search
			},
			datetime,
			fetchSchedule,
			fetchSpeakers
		} = this.props;
		const {
			currentDate
		} = this.state;
		const {
			context
		} = this;
		const date = new URLSearchParams(search).get('date');
		const locale = context.getLocale();

		fetchSchedule(locale);
		fetchSpeakers(locale);

		if (!date) {

			const schedule = getScheduleDates(context);

			schedule.some(({ date }) => {

				if (isSameDay(currentDate, new Date(date))) {
					history.push({
						search: addSearchParams(search, {
							date
						})
					});
					return true;
				}

				return false;
			});
		}

		if (!datetime) {
			this.updateIntervalId = setInterval(this.updateCurrentDate, UPDATE_INTERVAL);
		}
	}

	componentWillUnmount() {
		clearInterval(this.updateIntervalId);
	}

	@Bind()
	private updateCurrentDate() {
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
