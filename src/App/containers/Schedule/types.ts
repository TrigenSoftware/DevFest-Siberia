import {
	RouteComponentProps
} from 'react-router-dom';
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IState {
	currentDate: Date;
}

export interface IProps extends ISectionProps, RouteComponentProps {
	datetime?: Date;
}
