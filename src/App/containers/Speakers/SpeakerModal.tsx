import React, {
	ContextType,
	Component
} from 'react';
import {
	RouteComponentProps
} from 'react-router-dom';
import {
	History
} from 'history';
import {
	I18nContext
} from 'i18n-for-react';
import {
	Bind,
	Debounce
} from '@flexis/ui/helpers';
import {
	getSpeaker
} from '~/blocks/common/i18n';
import Modal, {
	IProps as IModalProps
} from '~/components/Modal';
import SpeakerCard from '~/components/SpeakerCard';

interface IRouteParams {
	id?: string;
}

export interface IProps extends IModalProps, RouteComponentProps<IRouteParams> {
	history: History;
}

interface IState {
	active: boolean;
	currentId: string;
}

const {
	transitionDuration
} = Modal.defaultProps;

export default class SpeakerModal extends Component<IProps, IState> {

	static contextType = I18nContext;

	static getDerivedStateFromProps(
		{
			match: {
				params
			}
		}: IProps,
		{ currentId }: IState
	) {

		let nextState: Partial<IState> = null;

		nextState = {
			active: false
		};

		if (params.id !== currentId && params.id) {
			nextState = {
				active:    true,
				currentId: params.id
			};
		}

		return nextState;
	}

	context!: ContextType<typeof I18nContext>;

	state = {
		active:    false,
		currentId: null
	};

	render() {

		const {
			context
		} = this;
		const {
			id
		} = this.props.match.params;
		const {
			active
		} = this.state;
		const speaker = getSpeaker(context, id);

		return (
			<Modal
				onClose={this.onClose}
				active={active}
			>
				<SpeakerCard
					{...speaker}
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
			history
		} = this.props;

		history.push('/speakers');
	}
}
