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
	login(email: string, password: string);
	logout();
	setToken();
	isLogged();
	clearErrors();
}
