import React, {
	ContextType,
	Component
} from 'react';
import {
	RouteComponentProps,
	withRouter
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
	getSpeaker
} from '~/services/i18n';
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

export interface IProps extends ISpeakerModalProps, RouteComponentProps {}

interface IState {
	active: boolean;
	prevSearch: string;
}

const {
	transitionDuration
} = Modal.defaultProps;

export class SpeakerModal extends Component<IProps, IState> {

	static contextType = I18nContext;

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

	context!: ContextType<typeof I18nContext>;

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
			...props
		} = this.props;
		const {
			active
		} = this.state;
		const {
			context
		} = this;
		const id = new URLSearchParams(search).get('id');
		const speaker = getSpeaker(context, id);

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
