import React, {
	HTMLAttributes,
	Component,
	ReactElement
} from 'react';
import {
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import Badge from '../Badge';
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
	talkTypeBadge?: string;
	talkLevelBadge?: string;
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLElement>
>;

export default class SpeakerCard extends Component<IProps> {

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
			children,
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
						{...stylesheet('mobName')}
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
						<div
							{...stylesheet('date')}
						>
							{talkTime}<span>AM</span>
						</div>
						{talkTypeBadge && (
							<Badge
								variant='fill'
								color='pink'
							>
								{talkTypeBadge}
							</Badge>
						)}
						{talkLevelBadge && (
							<Badge
								color='aqua'
							>
								{talkLevelBadge}
							</Badge>
						)}
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
}
