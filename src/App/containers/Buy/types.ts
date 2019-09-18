import {
	RouteComponentProps
} from 'react-router-dom';
import {
	IUserStateProps
} from '~/store/types';
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IProps extends ISectionProps, IUserStateProps, RouteComponentProps {
	buy(registrationData);
}

export interface IState {
	firstname: string;
	lastname: string;
	position: string;
	company: string;
	city: string;
	email: string;
}
