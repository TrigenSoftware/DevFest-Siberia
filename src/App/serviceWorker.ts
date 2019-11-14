import {
	precacheAndRoute,
	getCacheKeyForURL
} from 'workbox-precaching';
import {
	registerNavigationRoute,
	registerRoute
} from 'workbox-routing';
import {
	NetworkFirst,
	StaleWhileRevalidate
} from 'workbox-strategies';
import connectUpdater from './util/connectUpdater';

declare var self: ServiceWorkerGlobalScope;

const Resources = {
	Favicons:         /\/favicons\//,
	PngFavicons:      /\/favicons\/.*\.png$/,
	AuthRoute:        /\/auth(\/|$)/,
	CloudinaryImages: /^https:\/\/(gdg-siberia\.com|res\.cloudinary\.com)\/.*\.(jpg|svg)$/,
	JsonData:         /\.fetch\.json$/
};

const ignorePrecachePatterns = [
	Resources.PngFavicons,
	Resources.JsonData
];

function filterPrecache({ url }) {
	return ignorePrecachePatterns.every(_ => !_.test(url));
}

precacheAndRoute(
	self.__precacheManifest.filter(filterPrecache)
);

registerNavigationRoute(
	getCacheKeyForURL('/shell.html'),
	{
		blacklist: [
			Resources.AuthRoute
		]
	}
);

registerRoute(
	Resources.Favicons,
	new StaleWhileRevalidate()
);

registerRoute(
	Resources.CloudinaryImages,
	new StaleWhileRevalidate({
		cacheName: 'images'
	})
);

registerRoute(
	Resources.JsonData,
	new NetworkFirst({
		cacheName:             'jsondata',
		networkTimeoutSeconds: 3
	})
);

connectUpdater();
