import {
	IUserStateProps
} from '~/store/types';
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IProps extends ISectionProps, IUserStateProps {
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
