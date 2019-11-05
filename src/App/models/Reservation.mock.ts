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
		status:     faker.lorem.word()
	});
}

export default function mockReservations() {
	return List(Array.from({ length: count }).map(mockReservation));
}
