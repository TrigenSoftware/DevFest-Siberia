export const timezone = '+07:00';

export const start = `2019-11-29T14:00:00${timezone}`;

export const startTime = new Date(start);

export const end = `2019-12-01T14:00:00${timezone}`;

export const endTime = new Date(end);

export const keywords = [
	'event',
	'devfest',
	'devfest siberia',
	'devfest-siberia',
	'google',
	'programming',
	'android',
	'chrome',
	'developers',
	'siberia',
	'novosibirsk'
].join(', ');

export const title = 'DevFest Siberia 2019';

export const twitterSite = '@GDGNsk';

export const siteUrl = process.env.SITE_URL;

export const sharingImages = {
	image:    'https://res.cloudinary.com/trigen/image/upload/c_scale,w_600/v1570633848/devfest2019/share.jpg',
	twitter:  'https://res.cloudinary.com/trigen/image/upload/c_scale,w_600/v1570633848/devfest2019/share.jpg',
	facebook: 'https://res.cloudinary.com/trigen/image/upload/c_scale,w_600/v1570633848/devfest2019/share.jpg'
};

export const ageRange = '16+';

export const coordinates = {
	lat: 54.857755,
	lng: 83.111595
};

export const googleMaps = {
	keys: {
		key:      process.env.GOOGLE_MAPS_KEY,
		language: 'ru'
	},
	center: coordinates,
	zoom: 16,
	options: {
		draggable:         false,
		scrollwheel:       false,
		fullscreenControl: false,
		mapTypeControl:    true
	}
};
