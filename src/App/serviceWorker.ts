import {
	precacheAndRoute,
	getCacheKeyForURL
} from 'workbox-precaching';
import {
	registerNavigationRoute,
	registerRoute
} from 'workbox-routing';
import {
	StaleWhileRevalidate
} from 'workbox-strategies';

declare var self: ServiceWorkerGlobalScope;

precacheAndRoute(
	self.__precacheManifest.filter(
		({ url }) => !/\/favicons\/.*\.png$/.test(url)
	)
);

registerNavigationRoute(
	getCacheKeyForURL('/shell.html')
);

registerRoute(
	/\/favicons\//,
	new StaleWhileRevalidate()
);

registerRoute(
	/^https:\/\/(gdg-siberia\.com|res\.cloudinary\.com)\/.*\.(jpg|svg)$/,
	new StaleWhileRevalidate({
		cacheName: 'images'
	})
);
