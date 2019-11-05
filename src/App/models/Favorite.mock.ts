/* tslint:disable no-magic-numbers */
import {
	List
} from 'immutable';
import faker from 'faker';
import Favorite from './Favorite';

const count = 3;

function mockFavorite() {
	return Favorite({
		lectureId: faker.lorem.word()
	});
}

export default function mockFavorites() {
	return List(Array.from({ length: count }).map(mockFavorite));
}
