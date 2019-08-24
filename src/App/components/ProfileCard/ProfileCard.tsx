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
import stylesheet from './ProfileCard.st.css';

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
			to,
			...props
		} = this.props;

		return (
			to ? (
				<Link
					{...stylesheet('root', {
						clickable: Boolean(to)
					}, props)}
					to={to}
				>
					{this.renderProfile()}
				</Link>
			) : (
				<article
					{...props}
					{...stylesheet('root', {}, props)}
				>
					{this.renderProfile()}
				</article>
			)
		);
	}

	private renderProfile() {

		const {
			src,
			firstname,
			lastname,
			description,
			location,
			badge,
			to
		} = this.props;

		return (
			<>
				<figure
					{...stylesheet('img')}
					aria-hidden
					style={{
						backgroundImage: `url(${src})`
					}}
				>
					{to && (
						<div
							{...stylesheet('label')}
						>
							{__x`profile.view`}
						</div>
					)}
				</figure>
				<h3
					{...stylesheet('name')}
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
				<footer
					{...stylesheet('footer')}
				>
					{this.renderContacts()}
					{badge}
				</footer>
			</>
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
						{...stylesheet('link')}
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
