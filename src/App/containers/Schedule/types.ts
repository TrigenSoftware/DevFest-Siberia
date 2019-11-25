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
	fetchSchedule(locale?: string);
	selectScheduleByType(date: string, type: string): Schedule[];
	fetchSpeakers(locale?: string);
	selectSpeaker(id: string): Speaker;
	fetchFavorites();
	addFavorite(lectureId: string);
	deleteFavorite(ectureId: string);
	fetchReservations();
	addReservation(workshopId: string);
	deleteReservation(workshopId: string);
	isLogged();
}
