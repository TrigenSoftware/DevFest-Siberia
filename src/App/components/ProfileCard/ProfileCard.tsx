import React, {
	HTMLAttributes,
	Component,
	ReactElement
} from 'react';
import {
	LocationDescriptor
} from 'history';
import PropTypes from 'prop-types';
import {
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import {
	__x
} from 'i18n-for-react';
import Link from '../Link';
import ContactLink, {
	ContactLinkType
} from '../ContactLink';
import {
	style,
	classes
} from './ProfileCard.st.css';

interface ISelfProps {
	src: string;
	firstname: string;
	lastname: string;
	description?: string;
	location?: string;
	badge?: ReactElement;
	contacts?: Record<string, string>;
	to?: LocationDescriptor;
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLElement>
>;

export default class ProfileCard extends Component<IProps> {

	static propTypes = {
		src:         PropTypes.string.isRequired,
		firstname:   PropTypes.string.isRequired,
		lastname:    PropTypes.string.isRequired,
		description: PropTypes.string,
		location:    PropTypes.string,
		badge:       PropTypes.any,
		contacts:    PropTypes.any,
		to:          PropTypes.any
	};

	render() {

		const {
			className,
			badge,
			to
		} = this.props;

		return (
			<article
				className={style(classes.root, {
					clickable: Boolean(to)
				}, className)}
			>
				{to ? (
					<Link
						className={classes.link}
						to={to}
					>
						{this.renderProfileInfo()}
					</Link>
				) : (
					this.renderProfileInfo()
				)}
				<footer
					className={classes.footer}
				>
					{this.renderContacts()}
					{badge}
				</footer>
			</article>
		);
	}

	private renderProfileInfo() {

		const {
			src,
			firstname,
			lastname,
			description,
			location,
			to
		} = this.props;

		return (
			<div
				className={classes.info}
			>
				<figure
					className={classes.img}
					aria-hidden
					style={{
						backgroundImage: `url(${src})`
					}}
				>
					{to && (
						<div
							className={classes.label}
						>
							{__x`profile.view`}
						</div>
					)}
				</figure>
				<h3
					className={classes.name}
				>
					{firstname}
					<br />
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
			</div>
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
