
declare var self: ServiceWorkerGlobalScope;

export default function connectUpdater() {

	self.addEventListener('message', (event) => {

		if (event.data.action === 'skipWaiting') {
			self.skipWaiting();
		}
	});
}
