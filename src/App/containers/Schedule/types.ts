import {
	RouteComponentProps
} from 'react-router-dom';
import {
	Schedule,
	Speaker,
	IScheduleStateProps,
	ISpeakersStateProps
} from '~/store/types';
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IState {
	currentDate: Date;
}

export interface IProps extends ISectionProps, IScheduleStateProps, ISpeakersStateProps, RouteComponentProps {
	actionsReady: boolean;
	datetime?: Date;
	fetchSchedule();
	selectScheduleByType(date: string, type: string): Schedule[];
	fetchSpeakers();
	selectSpeaker(id: string): Speaker;
}
