import React, {
	ContextType,
	Component
} from 'react';
import {
	RouteComponentProps
} from 'react-router-dom';
import {
	I18nContext
} from 'i18n-for-react';
import {
	Bind,
	Debounce,
	omit
} from '@flexis/ui/helpers';
import {
	getLocalizedPath,
	getSpeaker
} from '~/services/i18n';
import {
	routeProps
} from '~/blocks/common/router';
import Modal, {
	IProps as IModalProps
} from '~/components/Modal';
import SpeakerCard from '~/components/SpeakerCard';
import {
	style,
	classes
} from './SpeakerModal.st.css';

interface IRouteParams {
	id?: string;
}

export interface IProps extends IModalProps, RouteComponentProps<IRouteParams> {}

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
			className,
			match: {
				params
			},
			...props
		} = this.props;
		const {
			active
		} = this.state;
		const {
			context
		} = this;
		const speaker = getSpeaker(context, params.id);

		return (
			<Modal
				{...omit(props, routeProps)}
				className={style(classes.root, className)}
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
			context,
			props
		} = this;
		const {
			history,
			location: {
				search
			}
		} = props;

		history.push({
			pathname: getLocalizedPath(context, '/speakers'),
			search
		});
	}
}
