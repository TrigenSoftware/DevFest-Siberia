import {
 List
} from 'immutable';
import Favorite from '~/models/Favorite';
import Reservation from '~/models/Reservation';

export function favoritesFromResponseData(responseData) {
	return List(responseData).map(Favorite);
}

export function reservationFromResponseData(responseData) {
	return Reservation({
		workshopId: responseData.workshopId,
		status:     responseData.status
	});
}

export function reservationsFromResponseData(responseData) {
	return List(responseData).map(Reservation);
}
