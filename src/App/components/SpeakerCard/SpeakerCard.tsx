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
import Badge, {
	IProps as IBadgeProps
} from '../Badge';
import {
	style,
	classes
} from './SpeakerCard.st.css';

interface ISelfProps {
	src: string;
	firstname: string;
	lastname: string;
	description: string;
	location: string;
	contacts?: Record<string, string>;
	badge?: string;
	text: string;
	talkTitle: string;
	talkLocation: string;
	talkTime: string;
	talkTypeBadge?: string;
	talkLevelBadge?: string;
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLElement>
>;

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
		talkTitle:      PropTypes.string.isRequired,
		talkLocation:   PropTypes.string.isRequired,
		talkTime:       PropTypes.string.isRequired,
		talkTypeBadge:  PropTypes.string,
		talkLevelBadge: PropTypes.string
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
			talkTitle,
			talkLocation,
			talkTime,
			talkTypeBadge,
			talkLevelBadge,
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
						<>
							{this.renderContacts()}
							{this.renderBadge(badge)}
						</>
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
					<div
						className={classes.group}
					>
						<div
							className={classes.title}
						>
							{talkTitle}
						</div>
						<div
							className={classes.talkLocation}
						>
							{talkLocation}
						</div>
					</div>
					<div
						className={classes.group}
					>
						{this.renderDate()}
						<div>
							{this.renderBadge(talkTypeBadge)}
							{this.renderBadge(talkLevelBadge)}
						</div>
					</div>
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

	private renderDate() {

		const {
			talkTime
		} = this.props;
		const [
			time,
			format
		] = talkTime.split(' ');

		return (
			<div
				className={classes.date}
			>
				{time}
				{format && (
					<span>{' '}{format}</span>
				)}
			</div>
		);
	}

	private renderBadge(type: string) {

		if (!type) {
			return null;
		}

		let props: Partial<IBadgeProps> = {};

		switch (type.toLowerCase()) {

			case 'mobile':
				props = {
					variant: 'fill',
					color:   'pink'
				};
				break;

			case 'web':
				props = {
					variant: 'fill',
					color:   'aqua'
				};
				break;

			case 'ai':
				props = {
					variant: 'fill',
					color:   'red'
				};
				break;

			case 'hype':
				props = {
					variant: 'fill',
					color:   'green'
				};
				break;

			case 'junior':
				props = {
					color: 'aqua'
				};
				break;

			case 'middle':
				props = {
					color: 'pink'
				};
				break;

			case 'senior':
				props = {
					color: 'red'
				};
				break;

			default:
		}

		return (
			<Badge
				{...props}
			>
				{type}
			</Badge>
		);
	}
}
