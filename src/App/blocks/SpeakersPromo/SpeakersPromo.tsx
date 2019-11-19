/* tslint:disable:no-magic-numbers */
import React, {
	ContextType,
	Component
} from 'react';
import {
	withRouter
} from 'react-router-dom';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import SpeakerModal from '~/blocks/SpeakerModal';
import Section from '~/components/Section';
import ProfileCard from '~/components/ProfileCard';
import Link from '~/components/Link';
import Badge from '~/components/Badge';
import Loading from '~/components/Loading';
import {
	addSearchParams
} from '../common/router';
import {
	IProps
} from './types';
import {
	style,
	classes
} from './SpeakersPromo.st.css';

export class SpeakersPromo extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			location: {
				search
			},
			actionsReady,
			selectPromoSpeakers,
			selectSpeaker
		} = this.props;
		const speakers = selectPromoSpeakers();

		return (
			<Section
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
					{speakers.map(item => (
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
				{actionsReady ? (
					<SpeakerModal
						getSpeaker={selectSpeaker}
					/>
				) : (
					<Loading/>
				)}
			</Section>
		);
	}

	componentDidMount() {

		const {
			fetchSpeakers
		} = this.props;
		const {
			context
		} = this;
		const locale = context.getLocale();

		fetchSpeakers(locale);
	}
}

export default withRouter(SpeakersPromo);
