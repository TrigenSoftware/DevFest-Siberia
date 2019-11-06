import React, {
	Component
} from 'react';
import {
	Location,
	History
} from 'history';
import {
	Bind,
	Debounce
} from '@flexis/ui/helpers';
import {
	deleteSearchParams
} from '~/blocks/common/router';
import Modal, {
	IProps as IModalProps
} from '../../Modal';
import {
	style,
	classes
} from './ScheduleItemModal.st.css';

type IScheduleItemModalProps = Omit<IModalProps, 'children'>;

export interface IProps extends IScheduleItemModalProps {
	location: Location;
	history: History;
	title: string;
	description: string;
}

interface IState {
	active: boolean;
	prevSearch: string;
}

const {
	transitionDuration
} = Modal.defaultProps;

export class ScheduleItemModal extends Component<IProps> {

	static getDerivedStateFromProps(
		{
			location: {
				search
			},
			title
		}: IProps,
		{
			prevSearch
		}: IState
	) {

		if (prevSearch === search) {
			return null;
		}

		const searchWithParam = new URLSearchParams(search).get('title') === title;
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
			title,
			description,
			children,
			...props
		} = this.props;
		const {
			active
		} = this.state;

		return (
			<Modal
				{...props}
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
				>
					{description}
				</div>
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
