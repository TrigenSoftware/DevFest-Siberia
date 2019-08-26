import React, {
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import ContactLink, {
	ContactLinkType
} from '../ContactLink';
import Badge from '../Badge';
import stylesheet from './SpeakerCard.st.css';

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
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<div
					{...stylesheet('profile')}
				>
					<figure
						{...stylesheet('img')}
						style={{
							backgroundImage: `url(${src})`
						}}
					/>
					<h3
						{...stylesheet('name', {
							mobile: true
						})}
					>
						{firstname}
						<br />
						{lastname}
					</h3>
					<div
						{...stylesheet('description')}
					>
						{description}
					</div>
					<div
						{...stylesheet('location')}
					>
						{location}
					</div>
					<>
						{this.renderContacts()}
						{this.renderBadge(badge)}
					</>
				</div>
				<h3
					{...stylesheet('name')}
				>
					{firstname}
					<br />
					{lastname}
				</h3>
				<div
					{...stylesheet('text')}
				>
					<p>
						{text}
					</p>
				</div>
				<footer
					{...stylesheet('footer')}
				>
					<div
						{...stylesheet('group')}
					>
						<div
							{...stylesheet('title')}
						>
							{talkTitle}
						</div>
						<div
							{...stylesheet('talkLocation')}
						>
							{talkLocation}
						</div>
					</div>
					<div
						{...stylesheet('group')}
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
				{...stylesheet('contacts')}
			>
				{Object.entries(contacts).map(([type, href]) => (
					<ContactLink
						{...stylesheet('contactLink')}
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
				{...stylesheet('date')}
			>
				{time}
				{format && (
					<span>{format}</span>
				)}
			</div>
		);
	}

	private renderBadge(type: string) {

		switch (type) {

			case 'GDE':
				return (
					<Badge>
						{type}
					</Badge>
				);
			case 'All':
				return (
					<Badge
						variant='fill'
						color='blue'
					>
						{type}
					</Badge>
				);
			case 'Mobile':
				return (
					<Badge
						variant='fill'
						color='pink'
					>
						{type}
					</Badge>
				);
			case 'Web':
				return (
					<Badge
						variant='fill'
						color='aqua'
					>
						{type}
					</Badge>
				);
			case 'AI':
				return (
					<Badge
						variant='fill'
						color='red'
					>
						{type}
					</Badge>
				);
			case 'Junior':
				return (
					<Badge
						color='aqua'
					>
						{type}
					</Badge>
				);
			case 'Middle':
				return (
					<Badge
						color='pink'
					>
						{type}
					</Badge>
				);
			case 'Senior':
				return (
					<Badge
						color='red'
					>
						{type}
					</Badge>
				);
			default:
				return (
					<Badge>
						{type}
					</Badge>
				);
		}
	}
}
