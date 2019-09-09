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
	getLocalizedPath,
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

type IOmitModalProps = Omit<IModalProps, 'children'>;

export interface IProps extends IOmitModalProps, RouteComponentProps {}

interface IState {
	active: boolean;
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
		}: IProps
	) {

		const searchWithParam = search.includes('id');
		const nextState: Partial<IState> = {
			active: searchWithParam
		};

		return nextState;
	}

	context!: ContextType<typeof I18nContext>;

	state = {
		active: false
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
			search:   deleteSearchParams(search, 'id')
		});
	}
}

export default withRouter(SpeakerModal);
