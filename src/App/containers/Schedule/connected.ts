import {
	Connect
} from '@flexis/redux';
import {
	State,
	IActions
} from '~/store/types';
import {
	ScheduleSegment,
	SpeakersSegment
} from '~/store/segments';
import ScheduleContainer from './Schedule';

export function mapStateToProps(
	{
		schedule,
		speakers
	}: State
) {
	return {
		schedule: schedule.schedule,
		speakers: speakers.speakers
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
	deleteFavorite() {},
	fetchReservations() {},
	addReservation() {},
	deleteReservation() {},
	isLogged() {}
};

export function mapActionsToProps(
	{
		schedule,
		speakers,
		user
	}: IActions) {

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
		fetchReservations:    schedule.fetchReservations,
		addReservation:       schedule.addReservation,
		deleteReservation:    schedule.deleteReservation,
		isLogged:             user.isLogged
	};
}

export default Connect({
	dependsOn:   [
		ScheduleSegment,
		SpeakersSegment
	],
	skipWaiting: true,
	mapStateToProps,
	mapActionsToProps
})(ScheduleContainer);
