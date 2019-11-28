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
import {
	getTalkTypes
} from '~/services/i18n';
import SpeakerModal from '~/blocks/SpeakerModal';
import Section from '~/components/Section';
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
import ProfileCard from '~/components/ProfileCard';
import {
	ScheduleDescriptionModal
} from '~/components/Schedule';
import Badge from '~/components/Badge';
import Loading from '~/components/Loading';
import {
	addSearchParams
} from '~/blocks/common/router';
import {
	IProps
} from './types';
import {
	style,
	classes
} from './Speakers.st.css';

export class Speakers extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			location,
			history,
			schedule,
			actionsReady,
			selectSpeakersByType,
			selectSpeaker
		} = this.props;
		const {
			search
		} = location;
		const {
			context
		} = this;
		const type = new URLSearchParams(search).get('type');
		const nav = getTalkTypes(context);
		const speakers = selectSpeakersByType(type);

		return (
			<Section
				className={style(classes.root, className)}
			>
				<div
					className={classes.group}
				>
					<h2>
						{__x`speakers.title`}
					</h2>
				</div>
				<ToggleNav
					className={classes.nav}
				>
					{nav.map(item => (
						<ToggleNavLink
							key={item.type}
							to={`/speakers?type=${item.type}`}
						>
							{item.label}
						</ToggleNavLink>
					))}
				</ToggleNav>
				<ul
					className={classes.list}
				>
					{speakers.map(item => (
						<li
							key={item.id}
						>
							<ProfileCard
								{...item}
								badge={item.badge && (
									<Badge
										color='pink'
									>
										{item.badge}
									</Badge>
								)}
								to={{
									search: addSearchParams(search, {
										id: item.id,
										type
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
				<ScheduleDescriptionModal
					location={location}
					history={history}
					schedule={schedule}
				/>
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

export default withRouter(Speakers);
