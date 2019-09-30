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

		this.addEffects();
	}

	componentWillUnmount() {
		this.removeEffects();
	}

	@Bind()
	private onChange() {

		const {
			onChange
		} = this.props;
		const isOffline = !navigator.onLine;

		onChange(isOffline);
	}

	private addEffects() {
		this.unsubscribeOnlineEvent = subscribeEvent(
			document,
			'online',
			this.onChange
		);
		this.unsubscribeOfflineEvent = subscribeEvent(
			document,
			'offline',
			this.onChange
		);
	}

	private removeEffects() {
		this.unsubscribeOnlineEvent();
		this.unsubscribeOnlineEvent = null;
		this.unsubscribeOfflineEvent();
		this.unsubscribeOfflineEvent = null;
	}
}
