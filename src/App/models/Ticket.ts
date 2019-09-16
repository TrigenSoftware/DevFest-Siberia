import {
	Record
} from 'immutable';

export interface ITicketProps {
	ticketUid: string;
}

type Ticket = ReturnType<Record.Factory<ITicketProps>>;

const Ticket = Record<ITicketProps>({
	ticketUid: ''
});

export default Ticket;
