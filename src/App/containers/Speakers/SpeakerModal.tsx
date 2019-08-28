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
} from '~/components/common/i18n';
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
		}: IProps
	) {
		return {
			active: Boolean(params.id)
		};
	}

	context!: ContextType<typeof I18nContext>;

	state = {
		active: false
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
