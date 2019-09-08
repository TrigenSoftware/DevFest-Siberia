import React, {
	ContextType,
	Component
} from 'react';
import PropTypes from 'prop-types';
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
	routeProps
} from '~/blocks/common/router';
import Modal from '~/components/Modal';
import SpeakerCard from '~/components/SpeakerCard';
import {
	style,
	classes
} from './SpeakerModal.st.css';

export interface IProps extends RouteComponentProps {
	className?: string;
}

interface IState {
	active: boolean;
}

const {
	transitionDuration
} = Modal.defaultProps;

export class SpeakerModal extends Component<IProps, IState> {

	static propTypes = {
		className: PropTypes.string
	};

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
			context,
			props
		} = this;
		const {
			className,
			location: {
				search
			}
		} = props;
		const {
			active
		} = this.state;
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
		const type = new URLSearchParams(search).get('type');

		history.push({
			pathname: getLocalizedPath(context, '/speakers'),
			search: `${type ? `type=${type}` : ''}`
		});
	}
}

export default withRouter(SpeakerModal);
