import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	Location,
	History
} from 'history';
import {
	Bind,
	Debounce,
	omit
} from '@flexis/ui/helpers';
import {
	Schedule
} from '~/store/Schedule/Schedule.types';
import {
	deleteSearchParams
} from '~/blocks/common/router';
import Modal, {
	IProps as IModalProps
} from '~/components/Modal';
import {
	style,
	classes
} from './ScheduleDescriptionModal.st.css';

type IScheduleDescriptionModalProps = Omit<IModalProps, 'children'>;

export interface IProps extends IScheduleDescriptionModalProps {
	location: Location;
	history: History;
	schedule: Schedule[];
}

interface IState {
	active: boolean;
	prevSearch: string;
}

const {
	transitionDuration
} = Modal.defaultProps;

export default class ScheduleDescriptionModal extends Component<IProps> {

	static propTypes = {
		location:    PropTypes.object.isRequired,
		history:     PropTypes.object.isRequired,
		schedule:    PropTypes.array.isRequired
	};

	static getDerivedStateFromProps(
		{
			location: {
				search
			}
		}: IProps,
		{
			prevSearch
		}: IState
	) {

		if (prevSearch === search) {
			return null;
		}

		const searchWithParam = new URLSearchParams(search).has('title');
		const nextState: Partial<IState> = {
			active:     searchWithParam,
			prevSearch: search
		};

		return nextState;
	}

	state = {
		active:     false,
		prevSearch: ''
	};

	render() {

		const {
			className,
			location: {
				search
			},
			schedule,
			children,
			...props
		} = this.props;
		const {
			active
		} = this.state;
		const title = new URLSearchParams(search).get('title');
		const scheduleItem = schedule.find(item => item.title === title);

		if (!scheduleItem) {
			return null;
		}

		return (
			<Modal
				{...omit(props, [
					'location',
					'history'
				])}
				className={style(classes.root, className)}
				onClose={this.onClose}
				active={active}
			>
				<h3
					className={classes.title}
				>
					{title}
				</h3>
				<div
					className={classes.description}
					dangerouslySetInnerHTML={{
						__html: scheduleItem.description
					}}
				/>
			</Modal>
		);
	}

	@Bind()
	private onClose() {
		this.setState(() => ({
			active: false
		}), this.goBack);
	}

	@Debounce(transitionDuration)
	private goBack() {

		const {
			props
		} = this;
		const {
			history,
			location: {
				search
			}
		} = props;

		history.push({
			search: deleteSearchParams(search, 'title')
		});
	}
}
