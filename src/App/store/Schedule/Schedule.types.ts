import {
	Record,
	List
} from 'immutable';
import Favorite, {
	IFavoriteProps
} from '~/models/Favorite';
import Reservation, {
	IReservationProps
} from '~/models/Reservation';

export type Schedule = any;

/**
 * Schedule state.
 */

export interface IScheduleStateProps {
	schedule: Schedule[];
	favorites: List<Favorite>;
	reservations: List<Reservation>;
}

type ScheduleState = ReturnType<Record.Factory<IScheduleStateProps>>;

const ScheduleState = Record<IScheduleStateProps>({
	schedule:     [],
	favorites:    List(),
	reservations: List()
});

export {
	ScheduleState
};

/**
 * SetSchedule action.
 */

export type SetSchedulePayload = Schedule[];

export interface ISetScheduleAction {
	payload: SetSchedulePayload;
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
