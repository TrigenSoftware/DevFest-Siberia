import {
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	subscribeEvent,
	Bind
} from '@flexis/ui/helpers';

export interface IProps {
	onChange(isOffline: boolean);
}

export default class Offline extends Component<IProps> {

	static propTypes = {
		onChange: PropTypes.func.isRequired
	};

	private unsubscribeOnlineEvent: () => void = null;
	private unsubscribeOfflineEvent: () => void = null;

	render() {
		return null;
	}

	componentDidMount() {

		if (!navigator.onLine) {
			this.onChange();
		}

		this.toggleEffects();
	}

	componentWillUnmount() {
		this.removeEffects();
	}

	private toggleEffects() {

		const onlineSubscribed = typeof this.unsubscribeOnlineEvent === 'function';
		const offlineSubscribed = typeof this.unsubscribeOfflineEvent === 'function';

		if (!onlineSubscribed) {
			this.unsubscribeOnlineEvent = subscribeEvent(
				document,
				'online',
				this.onChange
			);
		}

		if (!offlineSubscribed) {
			this.unsubscribeOfflineEvent = subscribeEvent(
				document,
				'offline',
				this.onChange
			);
		}

		if (onlineSubscribed) {
			this.unsubscribeOnlineEvent();
			this.unsubscribeOnlineEvent = null;
		}

		if (offlineSubscribed) {
			this.unsubscribeOfflineEvent();
			this.unsubscribeOfflineEvent = null;
		}
	}

	private removeEffects() {

		if (typeof this.unsubscribeOnlineEvent === 'function') {
			this.unsubscribeOnlineEvent();
			this.unsubscribeOnlineEvent = null;
		}

		if (typeof this.unsubscribeOfflineEvent === 'function') {
			this.unsubscribeOfflineEvent();
			this.unsubscribeOfflineEvent = null;
		}
	}

	@Bind()
	private onChange() {

		const {
			onChange
		} = this.props;

		const isOffline = !navigator.onLine;

		onChange(isOffline);
	}
}
