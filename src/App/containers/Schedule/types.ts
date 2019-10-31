import {
	RouteComponentProps
} from 'react-router-dom';
import {
	IScheduleStateProps
} from '~/store/types';
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IState {
	currentDate: Date;
}

export interface IProps extends ISectionProps, IScheduleStateProps, RouteComponentProps {
	actionsReady: boolean;
	datetime?: Date;
	fetchSchedule();
	selectScheduleByType(date: string, type: string);
}
