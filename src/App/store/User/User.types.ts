import {
	Record,
	Map
} from 'immutable';
import User, {
	IUserProps
} from '~/models/User';
import Order, {
	IOrderProps
} from '~/models/Order';

/**
 * User state.
 */

export interface IUserStateProps {
	user: User;
	order: Order;
	errors: Map<any, Error>;
}

type UserState = ReturnType<Record.Factory<IUserStateProps>>;

const UserState = Record<IUserStateProps>({
	user:   null,
	order:  null,
	errors: Map()
});

export {
	UserState
};

/**
 * SetUser action.
 */

export type SetUserPayload = IUserProps;

export interface ISetUserAction {
	payload: SetUserPayload;
}

/**
 * SetOrder action.
 */

export type SetOrderPayload = IOrderProps;

export interface ISetOrderAction {
	payload: SetOrderPayload;
}

/**
 * SetUserError action.
 */

interface ISetUserErrorPayload {
	type: any;
	error: Error;
}

export type SetUserErrorPayload = ISetUserErrorPayload;

export interface ISetUserErrorAction {
	payload: SetUserErrorPayload;
}
