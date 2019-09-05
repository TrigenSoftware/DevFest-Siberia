import {
	differenceInMonths,
	differenceInDays,
	differenceInHours,
	addMonths,
	addDays
} from 'date-fns';
import {
	PureComponent
} from 'react';
import PropTypes from 'prop-types';
import {
	omit
} from '@flexis/ui/helpers';
import icon from './icon';
import animate from './animate';
import {
	IIconProps
} from './types';

export interface IProps {
	start: Date;
	locale: string;
}

export default class TimerCat extends PureComponent<IProps, IIconProps> {

	static propTypes = {
		start:  PropTypes.any.isRequired,
		locale: PropTypes.string.isRequired
	};

	static getDerivedStateFromProps(
		{
			locale,
			start
		}: IProps
	) {

		const now = new Date();
		const months = differenceInMonths(start, now);
		const afterMonths = addMonths(now, months);
		const days = differenceInDays(start, afterMonths);
		const afterDays = addDays(afterMonths, days);
		const hours = differenceInHours(start, afterDays);

		return {
			locale,
			hours,
			days,
			months
		};
	}

	state = {
		locale: '',
		hours:  0,
		days:   0,
		months: 0
	};

	render() {
		return icon(
			this.state,
			omit(this.props, [
				'locale',
				'start'
			])
		);
	}

	componentDidMount() {
		animate();
	}
}
