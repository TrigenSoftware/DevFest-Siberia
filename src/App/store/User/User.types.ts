import {
	Record,
	List,
	Map
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
import Favorite, {
	IFavoriteProps
} from '~/models/Favorite';
import Reservation, {
	IReservationProps
} from '~/models/Reservation';

/**
 * User state.
 */

export interface IUserStateProps {
	user: User;
	order: Order;
	product: Product;
	favorites: List<Favorite>;
	reservations: List<Reservation>;
	errors: Map<any, Error>;
}

type UserState = ReturnType<Record.Factory<IUserStateProps>>;

const UserState = Record<IUserStateProps>({
	user:         null,
	order:        null,
	product:      null,
	favorites:    List(),
	reservations: List(),
	errors:       Map()
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
 * SetProducts action.
 */

export type SetProductPayload = IProductProps;

export interface ISetProductAction {
	payload: SetProductPayload;
}

/**
 * SetFavorites action.
 */

export type SetFavoritesPayload = IFavoriteProps[] | List<IFavoriteProps>;

export interface ISetFavoritesAction {
	payload: SetFavoritesPayload;
}

/**
 * SetReservations action.
 */

export type SetReservationsPayload = IReservationProps[] | List<IReservationProps>;

export interface ISetReservationsAction {
	payload: SetReservationsPayload;
}

/**
 * SetReservation action.
 */

export type SetReservationPayload = IReservationProps;

export interface ISetReservationAction {
	payload: SetReservationPayload;
}

/**
 * RemoveReservation action.
 */

export type RemoveReservationPayload = IReservationProps;

export interface IRemoveReservationAction {
	payload: RemoveReservationPayload;
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
