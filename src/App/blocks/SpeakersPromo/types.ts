import {
	RouteComponentProps
} from 'react-router-dom';
import {
	Speaker,
	ISpeakersStateProps
} from '~/store/types';
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IActionsProps {
	actionsReady: boolean;
	fetchSpeakers(locale?: string);
	selectPromoSpeakers(): Speaker[];
	selectSpeaker(id: string): Speaker;
}

export interface IProps extends ISectionProps,
	ISpeakersStateProps,
	IActionsProps,
	RouteComponentProps {}
