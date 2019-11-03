import {
	parseISO,
	format
} from 'date-fns';
import React, {
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	CombinePropsAndAttributes,
	omit
} from '@flexis/ui/helpers';
import ContactLink, {
	ContactLinkType
} from '../ContactLink';
import Badge from '../Badge';
import Schedule, {
	VariantScheduleItemStatus,
	ScheduleItem
} from '../Schedule';
import {
	style,
	classes
} from './SpeakerCard.st.css';

interface ITalkProps {
	date: string;
	timeStart: string;
	lang: string;
	location: string;
	title: string;
	talkTypeBadge?: string;
	talkLevelBadge?: string;
}

interface ISelfProps {
	src: string;
	firstname: string;
	lastname: string;
	description: string;
	location: string;
	contacts?: Record<string, string>;
	badge?: string;
	text: string;
	talks: ITalkProps[];
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLElement>
>;

function formatTime(date: string, timeStart: string) {

	const startDate = parseISO(`${date}T${timeStart}:00`);
	const time = format(startDate, 'd MMM H:mm');

	return time;
}

export default class SpeakerCard extends Component<IProps> {

	static propTypes = {
		src:            PropTypes.string.isRequired,
		firstname:      PropTypes.string.isRequired,
		lastname:       PropTypes.string.isRequired,
		description:    PropTypes.string,
		location:       PropTypes.string,
		contacts:       PropTypes.any,
		badge:          PropTypes.string,
		text:           PropTypes.string.isRequired,
		talks:          PropTypes.array
	};

	render() {

		const {
			className,
			src,
			firstname,
			lastname,
			description,
			location,
			badge,
			text,
			talks,
			...props
		} = this.props;

		return (
			<article
				{...omit(props, [
					'id',
					'contacts',
					'type'
				])}
				className={style(classes.root, className)}
			>
				<div
					className={classes.info}
				>
					<div
						className={classes.profile}
					>
						<figure
							className={classes.img}
						>
							<img
								src={src}
								loading='lazy'
							/>
						</figure>
						<h3
							className={style(classes.name, {
								mobile: true
							})}
						>
							{firstname}
							<br/>
							{lastname}
						</h3>
						<div
							className={classes.description}
						>
							{description}
						</div>
						<div
							className={classes.location}
						>
							{location}
						</div>
						{this.renderContacts()}
						{badge && (
							<Badge>
								{badge}
							</Badge>
						)}
					</div>
					<h3
						className={classes.name}
					>
						{firstname}
						<br/>
						{lastname}
					</h3>
					<div
						className={classes.text}
					>
						<p
							dangerouslySetInnerHTML={{
								__html: text
							}}
						/>
					</div>
				</div>
				<footer
					className={classes.footer}
				>

					<Schedule
						className={classes.talks}
					>
						{talks.map((
							{
								date,
								timeStart,
								lang,
								location,
								title,
								talkTypeBadge,
								talkLevelBadge
							},
							i
						) => (
							<ScheduleItem
								key={i}
								time={formatTime(date, timeStart)}
								lang={lang}
								location={location}
								title={title}
								talkTypeBadge={talkTypeBadge}
								talkLevelBadge={talkLevelBadge}
								status={VariantScheduleItemStatus.Next}
							/>
						))}
					</Schedule>
				</footer>
			</article>
		);
	}

	private renderContacts() {

		const {
			contacts
		} = this.props;

		if (!contacts) {
			return null;
		}

		return (
			<div
				className={classes.contacts}
			>
				{Object.entries(contacts).map(([type, href]) => (
					<ContactLink
						className={classes.contactLink}
						key={href}
						type={type as ContactLinkType}
						href={href}
					>
						{type}
					</ContactLink>
				))}
			</div>
		);
	}
}
