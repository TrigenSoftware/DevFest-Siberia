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
	selectSpeaker() {
		return null;
	}
};

export function mapActionsToProps({ schedule, speakers }: IActions) {

	if (!schedule) {
		return pendingActions;
	}

	return {
		actionsReady:         true,
		fetchSchedule:        schedule.fetchSchedule,
		selectScheduleByType: schedule.selectScheduleByType,
		selectSpeaker:        speakers.selectSpeaker
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
