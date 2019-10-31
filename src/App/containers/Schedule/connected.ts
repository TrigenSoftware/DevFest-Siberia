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
import Loading from '~/components/Loading';
import ScheduleContainer from './Schedule';

export function mapStateToProps({ schedule }: State) {
	return {
		schedule: schedule.schedule
	};
}

export function mapActionsToProps({ schedule }: IActions) {
	return {
		fetchSchedule:        schedule.fetchSchedule,
		selectScheduleByType: schedule.selectScheduleByType
	};
}

export default Connect({
	dependsOn: ScheduleSegment,
	loading:   Loading,
	mapStateToProps,
	mapActionsToProps
})(ScheduleContainer);
