/* tslint:disable:no-magic-numbers */
import React, {
	ContextType,
	Component
} from 'react';
import {
	RouteComponentProps,
	withRouter
} from 'react-router-dom';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	omit
} from '@flexis/ui/helpers';
import {
	getPromoSpeakers
} from '~/services/i18n';
import SpeakerModal from '~/containers/Speakers/SpeakerModal';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import ProfileCard from '~/components/ProfileCard';
import Link from '~/components/Link';
import Badge from '~/components/Badge';
import {
	routeProps,
	addSearchParams
} from '../common/router';
import {
	style,
	classes
} from './SpeakersPromo.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

interface IState {
	speakers: any[];
}

export class SpeakersPromo extends Component<IProps, IState> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	state = {
		speakers: null
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
			speakers
		} = this.state;

		return (
			<>
				<Section
					{...omit(props, routeProps)}
					className={style(classes.root, className)}
				>
					<Link
						className={classes.title}
						to='/speakers'
					>
						{__x`speakers.title`}
					</Link>
					<ul
						className={classes.list}
					>
						{speakers && speakers.map(item => (
							<li
								key={item.id}
							>
								<ProfileCard
									src={item.src}
									firstname={item.firstname}
									lastname={item.lastname}
									description={item.description}
									location={item.location}
									badge={item.badge && (
										<Badge
											color='pink'
										>
											{item.badge}
										</Badge>
									)}
									to={{
										search: addSearchParams(search, {
											id: item.id
										})
									}}
								/>
							</li>
						))}
					</ul>
				</Section>
				<SpeakerModal/>
			</>
		);
	}

	componentDidMount() {

		const {
			context
		} = this;
		const speakers = [];
		const spekersPromo = getPromoSpeakers(context);

		for (let i = 0; i < 3; i++) {
			const index = Math.floor(Math.random() * spekersPromo.length);
			speakers.push(spekersPromo[index]);
			spekersPromo.splice(index, 1);
		}

		this.setState(() => ({
			speakers
		}));
	}
}

export default withRouter(SpeakersPromo);
