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
		schedule:  schedule.schedule,
		favorites: schedule.favorites
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
	deleteFavorite() {}
};

export function mapActionsToProps({ schedule }: IActions) {

	if (!schedule) {
		return pendingActions;
	}

	return {
		actionsReady:         true,
		fetchSchedule:        schedule.fetchSchedule,
		selectScheduleByType: schedule.selectScheduleByType,
		fetchFavorites:       schedule.fetchFavorites,
		addFavorite:          schedule.addFavorite,
		deleteFavorite:       schedule.deleteFavorite
	};
}

export default Connect({
	dependsOn:   ScheduleSegment,
	skipWaiting: true,
	mapStateToProps,
	mapActionsToProps
})(ScheduleContainer);
