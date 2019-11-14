/* tslint:disable no-magic-numbers */
import {
	List
} from 'immutable';
import faker from 'faker';
import Reservation from './Reservation';

const count = 3;

function mockReservation() {
	return Reservation({
		workshopId: faker.lorem.word(),
		status:     'reserved'
	});
}

function disabledReservation() {
	return Reservation({
		workshopId: 'ivZ4manCEMebayE4fk68Y',
		status:     'disabled'
	});
}

export default function mockReservations() {
	return List(Array.from({ length: count }).map(mockReservation)).push(disabledReservation());
}
