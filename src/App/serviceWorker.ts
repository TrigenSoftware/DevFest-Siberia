import {
	cacheNames
} from 'workbox-core';
import {
	cleanupOutdatedCaches,
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
import UpdaterHost from './util/UpdaterHost';

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

UpdaterHost.connect({
	clearCaches: [
		cacheNames.precache,
		cacheNames.runtime
	]
});

cleanupOutdatedCaches();

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
