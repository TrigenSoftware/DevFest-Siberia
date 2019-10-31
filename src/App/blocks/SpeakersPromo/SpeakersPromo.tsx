/* tslint:disable:no-magic-numbers */
import React, {
	Component
} from 'react';
import {
	withRouter
} from 'react-router-dom';
import {
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
				{!actionsReady && (
					<Loading/>
				)}
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
				<SpeakerModal
					getSpeaker={selectSpeaker}
				/>
			</Section>
		);
	}

	componentDidMount() {

		const {
			fetchSpeakers
		} = this.props;

		fetchSpeakers();
	}
}

export default withRouter(SpeakersPromo);
