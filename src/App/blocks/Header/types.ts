import {
	RouteComponentProps
} from 'react-router-dom';
import {
	IUserStateProps
} from '~/store/types';
import {
	IProps as ISectionProps
} from '~/components/Section';

export interface IActionsProps {
	actionsReady: boolean;
	login?(email: string, password: string);
	logout?();
	setToken?(token: string);
	isLogged?();
	clearErrors?();
}

export interface IProps extends ISectionProps,
	IUserStateProps,
	IActionsProps,
	RouteComponentProps {}
