import {
	Connect
} from '@flexis/redux';
import {
	State,
	IActions
} from '~/store/types';
import {
	ScheduleSegment
} from '~/store/segments';
import ScheduleContainer from './Schedule';

export function mapStateToProps({ schedule }: State) {
	return {
		schedule: schedule.schedule
	};
}

const pendingActions = {
	actionsReady: false,
	fetchSchedule() {},
	selectScheduleByType() {
		return [];
	},
	fetchFavorites() {},
	addFavorite() {},
	deleteFavorite() {},
	fetchReservations() {},
	addReservation() {},
	deleteReservation() {},
	isLogged() {}
};

export function mapActionsToProps(
	{
		schedule,
		user
	}: IActions) {

	if (!schedule) {
		return pendingActions;
	}

	return {
		actionsReady:         true,
		fetchSchedule:        schedule.fetchSchedule,
		selectScheduleByType: schedule.selectScheduleByType,
		fetchFavorites:       schedule.fetchFavorites,
		addFavorite:          schedule.addFavorite,
		deleteFavorite:       schedule.deleteFavorite,
		fetchReservations:    schedule.fetchReservations,
		addReservation:       schedule.addReservation,
		deleteReservation:    schedule.deleteReservation,
		isLogged:             user.isLogged
	};
}

export default Connect({
	dependsOn:   ScheduleSegment,
	skipWaiting: true,
	mapStateToProps,
	mapActionsToProps
})(ScheduleContainer);
