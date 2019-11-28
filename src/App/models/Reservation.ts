import {
	Record
} from 'immutable';

export interface IReservationProps {
	workshopId: string;
	status: string;
}

type Reservation = ReturnType<Record.Factory<IReservationProps>>;

const Reservation = Record<IReservationProps>({
	workshopId: '',
	status:     ''
});

export default Reservation;
