import {
	Record
} from 'immutable';

export interface ITicketProps {
	ticketUID: string;
}

type Ticket = ReturnType<Record.Factory<ITicketProps>>;

const Ticket = Record<ITicketProps>({
	ticketUID: ''
});

export default Ticket;
