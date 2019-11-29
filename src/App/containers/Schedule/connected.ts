import {
	Connect
} from '@flexis/redux';
import {
	State,
	IActions
} from '~/store/types';
import {
	ScheduleSegment,
	SpeakersSegment,
	UserSegment
} from '~/store/segments';
import ScheduleContainer from './Schedule';

export function mapStateToProps(
	{
		schedule,
		speakers
	}: State
) {
	return {
		schedule:     schedule.schedule,
		speakers:     speakers.speakers,
		favorites:    schedule.favorites,
		reservations: schedule.reservations
	};
}

const pendingActions = {
	actionsReady: false,
	fetchSchedule() {},
	selectScheduleByType() {
		return [];
	},
	fetchSpeakers() {},
	selectSpeaker() {
		return null;
	},
	fetchFavorites() {},
	addFavorite() {},
	selectIsFavorite() {},
	deleteFavorite() {},
	fetchReservations() {},
	addReservation() {},
	deleteReservation() {},
	selectIsReserved() {},
	isLogged() {}
};

export function mapActionsToProps(
	{
		schedule,
		speakers,
		user
	}: IActions
) {

	if (!schedule) {
		return pendingActions;
	}

	return {
		actionsReady:         true,
		fetchSchedule:        schedule.fetchSchedule,
		selectScheduleByType: schedule.selectScheduleByType,
		fetchSpeakers:        speakers.fetchSpeakers,
		selectSpeaker:        speakers.selectSpeaker,
		fetchFavorites:       schedule.fetchFavorites,
		addFavorite:          schedule.addFavorite,
		deleteFavorite:       schedule.deleteFavorite,
		selectIsFavorite:     schedule.selectIsFavorite,
		fetchReservations:    schedule.fetchReservations,
		addReservation:       schedule.addReservation,
		deleteReservation:    schedule.deleteReservation,
		selectIsReserved:     schedule.selectIsReserved,
		isLogged:             user.isLogged
	};
}

export default Connect({
	dependsOn:   [
		ScheduleSegment,
		SpeakersSegment,
		UserSegment
	],
	skipWaiting: true,
	mapStateToProps,
	mapActionsToProps
})(ScheduleContainer);
