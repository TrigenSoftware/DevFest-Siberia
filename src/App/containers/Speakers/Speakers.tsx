/* tslint:disable jsx-no-lambda */
import React, {
	ContextType,
	Component
} from 'react';
import {
	Route,
	RouteComponentProps
} from 'react-router-dom';
import {
	History
} from 'history';
import {
	Bind
} from '@flexis/ui/helpers';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import Speakers from '~/blocks/Speakers';
import Modal from '~/components/Modal';
import SpeakerCard from '~/components/SpeakerCard';
import Badge from '~/components/Badge';

interface IRouteParams {
	id?: string;
}

export interface IProps extends RouteComponentProps<IRouteParams> {
	history: History;
}

interface IState {
	active?: boolean;
}

export default class SpeakersContainer extends Component<IProps, IState> {

	static contextType = I18nContext;

	static getDerivedStateFromProps(
		{ match }: IProps
	) {

		const nextState: Partial<IState> = {
			active: Boolean(match.params.id)
		};

		return nextState;
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
			active
		} = this.state;
		const {
			speakers: {
				speakers
			}
		} = this.context.getCatalog(
			context.getLocale()
		) as any;
		const speaker = speakers.find(item => item.id === this.props.match.params.id);

		return (
			<>
				<Speakers/>
				<Route
					path='/speakers/:id'
					component={() => (
						<Modal
							onClose={this.onClose}
							active={active}
						>
							<SpeakerCard
								src={speaker.src}
								firstname={speaker.firstname}
								lastname={speaker.lastname}
								description={speaker.description}
								location={speaker.location}
								contacts={{
									twitter: '/test',
									vk:      '/test'
								}}
								badge={<Badge>GDG</Badge>}
								text='text'
								talkTitle='Название Доклада'
								talkLocation='543 аудитория, 3 этаж | Академпарк'
								talkTime='11:21 AM'
								talkTypeBadge={
									<Badge
										color='pink'
										variant='fill'
									>
										Mobile
									</Badge>
								}
								talkLevelBadge={
									<Badge
										color='aqua'
									>
										Junior
									</Badge>
								}
							/>
						</Modal>
					)}
				/>
			</>
		);
	}

	@Bind()
	private onClose() {

		const {
			history
		} = this.props;

		this.setState(() => ({
			active: false
		}), history.goBack);
	}
}
