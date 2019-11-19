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
	fetchSchedule(lang: string);
	selectScheduleByType(date: string, type: string): Schedule[];
	fetchSpeakers(lang: string);
	selectSpeaker(id: string): Speaker;
}
