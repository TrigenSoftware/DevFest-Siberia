import {
	Record,
	Map,
	List
} from 'immutable';
import User, {
	IUserProps
} from '~/models/User';
import Order, {
	IOrderProps
} from '~/models/Order';
import Product, {
	IProductProps
} from '~/models/Product';

/**
 * User state.
 */

export interface IUserStateProps {
	user: User;
	orders: List<Order>;
	product: Product;
	errors: Map<any, Error>;
}

type UserState = ReturnType<Record.Factory<IUserStateProps>>;

const UserState = Record<IUserStateProps>({
	user:     null,
	orders:   List(),
	product:  null,
	errors:   Map()
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

export type SetOrdersPayload = IOrderProps[] | List<IOrderProps>;

export interface ISetOrdersAction {
	payload: SetOrdersPayload;
}

/**
 * SetProducts action.
 */

export type SetProductPayload = IProductProps;

export interface ISetProductAction {
	payload: SetProductPayload;
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
