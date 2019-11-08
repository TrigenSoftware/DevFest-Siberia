
export default class UpdaterClient {

	private registration: ServiceWorkerRegistration = null;
	private nextServiceWorker: ServiceWorker = null;
	private updateAvailableListener: () => void = null;
	private updateListener: () => boolean = null;

	constructor() {
		this.onUpdateFound = this.onUpdateFound.bind(this);
		this.onStateChange = this.onStateChange.bind(this);
	}

	onUpdateAvailable(listener: () => void) {
		this.updateAvailableListener = listener;
	}

	onUpdate(listener: () => boolean) {
		this.updateListener = listener;
	}

	async start(
		registrationTask: Promise<ServiceWorkerRegistration>
	) {

		if (!('serviceWorker' in navigator)) {
			return;
		}

		this.registration = await registrationTask;
		this.listenUpdate();
		this.listenController();
	}

	update() {

		const {
			nextServiceWorker
		} = this;

		nextServiceWorker.postMessage({
			action: 'skipWaiting'
		});
	}

	private async listenUpdate() {

		const {
			registration
		} = this;

		registration.addEventListener('updatefound', this.onUpdateFound);
	}

	private async onUpdateFound() {

		const {
			registration
		} = this;
		const nextServiceWorker = registration.installing;

		this.nextServiceWorker = nextServiceWorker;

		nextServiceWorker.addEventListener('statechange', this.onStateChange);
	}

	private onStateChange() {

		const {
			nextServiceWorker,
			updateAvailableListener: updateListener
		} = this;

		switch (nextServiceWorker.state) {

			case 'installed':

				if (navigator.serviceWorker.controller
					&& typeof updateListener === 'function'
				) {
					updateListener();
				}

				break;

			default:
		}
	}

	private listenController() {

		const {
			updateListener
		} = this;
		let refreshing = false;

		navigator.serviceWorker.addEventListener('controllerchange', () => {

			if (refreshing
				|| typeof updateListener !== 'function'
			) {
				return;
			}

			refreshing = updateListener();
		});
	}
}
