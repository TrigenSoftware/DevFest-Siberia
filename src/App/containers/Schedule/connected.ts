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
	}
};

export function mapActionsToProps({ schedule }: IActions) {

	if (!schedule) {
		return pendingActions;
	}

	return {
		actionsReady:         true,
		fetchSchedule:        schedule.fetchSchedule,
		selectScheduleByType: schedule.selectScheduleByType
	};
}

export default Connect({
	dependsOn:   ScheduleSegment,
	skipWaiting: true,
	mapStateToProps,
	mapActionsToProps
})(ScheduleContainer);
