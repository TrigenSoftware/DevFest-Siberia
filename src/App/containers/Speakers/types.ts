import {
	RouteComponentProps
} from 'react-router-dom';
import {
	Speaker,
	ISpeakersStateProps,
	IScheduleStateProps
} from '~/store/types';
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IActionsProps {
	actionsReady: boolean;
	fetchSpeakers(locale?: string);
	selectSpeakersByType(type: string);
	selectSpeaker(id: string): Speaker;
}

export interface IProps extends ISectionProps,
	ISpeakersStateProps,
	IScheduleStateProps,
	IActionsProps,
	RouteComponentProps {}
