/* tslint:disable no-magic-numbers */
import {
	List
} from 'immutable';
import mockContact from '~/models/Contact.mock';

const count = 3;

export default function mockContacts() {
	return List(Array.from({ length: count }).map(mockContact));
}
