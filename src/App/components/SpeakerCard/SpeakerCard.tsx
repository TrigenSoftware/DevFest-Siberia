import React, {
	HTMLAttributes,
	Component,
	ReactElement
} from 'react';
import PropTypes from 'prop-types';
import {
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import ContactLink, {
	ContactLinkType
} from '../ContactLink';
import stylesheet from './SpeakerCard.st.css';

interface ISelfProps {
	src: string;
	firstname: string;
	lastname: string;
	description: string;
	location: string;
	contacts?: Record<string, string>;
	badge?: ReactElement;
	text: string;
	talkTitle: string;
	talkLocation: string;
	talkTime: string;
	talkTypeBadge?: ReactElement;
	talkLevelBadge?: ReactElement;
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
		badge:          PropTypes.any,
		text:           PropTypes.string.isRequired,
		talkTitle:      PropTypes.string.isRequired,
		talkLocation:   PropTypes.string.isRequired,
		talkTime:       PropTypes.string.isRequired,
		talkTypeBadge:  PropTypes.any,
		talkLevelBadge: PropTypes.any
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
						{badge}
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
							{talkTypeBadge}
							{talkLevelBadge}
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
}
