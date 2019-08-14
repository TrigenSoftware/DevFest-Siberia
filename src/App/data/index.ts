export const timezone = '+07:00';

export const start = `2019-11-29 14:00:00.123${timezone}`;

export const startTime = new Date(start);

export const googleMaps = {
	keys: {
		key:      process.env.GOOGLE_MAPS_KEY,
		language: 'ru'
	},
	center: {
		lat: 54.857755,
		lng: 83.111595
	},
	zoom: 17,
	options: {
		draggable:      false,
		scrollwheel:    false,
		mapTypeControl: true
	}
};
