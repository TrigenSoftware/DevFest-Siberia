import React, {
	Component
} from 'react';
import {
	RouteComponentProps,
	withRouter
} from 'react-router-dom';
import {
	Bind,
	Debounce,
	omit
} from '@flexis/ui/helpers';
import {
	routeProps,
	deleteSearchParams
} from '~/blocks/common/router';
import Modal, {
	IProps as IModalProps
} from '~/components/Modal';
import SpeakerCard from '~/components/SpeakerCard';
import {
	style,
	classes
} from './SpeakerModal.st.css';

type ISpeakerModalProps = Omit<IModalProps, 'children'>;

export interface IProps extends ISpeakerModalProps, RouteComponentProps {
	getSpeaker(id: string);
}

interface IState {
	active: boolean;
	prevSearch: string;
}

const {
	transitionDuration
} = Modal.defaultProps;

export class SpeakerModal extends Component<IProps, IState> {

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

		const searchWithParam = /[^\w]id=/.test(search);
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
			getSpeaker,
			...props
		} = this.props;
		const {
			active
		} = this.state;
		const id = new URLSearchParams(search).get('id');
		const speaker = getSpeaker(id);

		if (!speaker) {
			return null;
		}

		return (
			<Modal
				{...omit(props, routeProps)}
				className={style(classes.root, className)}
				onClose={this.onClose}
				active={active}
			>
				<SpeakerCard
					src={speaker.src}
					firstname={speaker.firstname}
					lastname={speaker.lastname}
					description={speaker.description}
					location={speaker.location}
					contacts={speaker.contacts}
					badge={speaker.badge}
					text={speaker.text}
					talkTitle={speaker.talkTitle}
					talkLocation={speaker.talkLocation}
					talkTime={speaker.talkTime}
					talkTypeBadge={speaker.talkTypeBadge}
					talkLevelBadge={speaker.talkLevelBadge}
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
			search: deleteSearchParams(search, 'id')
		});
	}
}

export default withRouter(SpeakerModal);
