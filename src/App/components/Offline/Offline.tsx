import {
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	subscribeEvent
} from '@flexis/ui/helpers';

export interface IProps {
	onChange(isOffline: boolean);
}

export default class Offline extends Component<IProps> {

	static propTypes = {
		onChange: PropTypes.func.isRequired
	};

	componentDidMount() {
		subscribeEvent(document, 'online', this.onChange);
		subscribeEvent(document, 'offline', this.onChange);
	}

	private onChange() {

		const {
			onChange
		} = this.props;

		const isOffline = navigator.onLine ? true : false;

		onChange(isOffline);
	}
}
