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
import stylesheet from './ProfileCard.st.css';

interface ISelfProps {
	src: string;
	firstname: string;
	lastname: string;
	description?: string;
	location?: string;
	badge?: ReactElement;
	contacts?: Record<string, string>;
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
		contacts:    PropTypes.any
	};

	render() {

		const {
			src,
			firstname,
			lastname,
			description,
			location,
			badge,
			contacts,
			...props
		} = this.props;

		return (
			<article
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<figure
					{...stylesheet('img')}
					aria-hidden
					style={{
						backgroundImage: `url(${src})`
					}}
				/>
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
