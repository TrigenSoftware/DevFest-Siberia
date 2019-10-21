import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import SROnly from '@flexis/ui/components/SROnly';
import Link, {
	IProps as ILinkProps
} from '../Link';
import TelegramIcon from '~/icons/telegram.svg';
import EmailIcon from '~/icons/email.svg';
import TwitterIcon from '~/icons/twitter.svg';
import VkIcon from '~/icons/vk.svg';
import FacebookIcon from '~/icons/facebook.svg';
import MeetupIcon from '~/icons/meetup.svg';
import GuthubIcon from '~/icons/github.svg';
import SiteIcon from '~/icons/site.svg';
import {
	style,
	classes
} from './ContactLink.st.css';

export enum ContactLinkTypeVariant {
	Telegram = 'telegram',
	Email = 'email',
	Twitter = 'twitter',
	Vk = 'vk',
	Facebook = 'facebook',
	Meetup = 'meetup',
	Github = 'github',
	Site = 'site'
}

export type ContactLinkType = 'telegram' | 'email' | 'twitter' | 'vk' | 'facebook' | 'meetup' | 'github' | 'site';

export interface IProps extends ILinkProps {
	type: ContactLinkType;
}

export const ContactLinkTypeValues: ContactLinkType[] = Object.values(ContactLinkTypeVariant);

export default class ContactLink extends Component<IProps> {

	static propTypes = {
		...Link.propTypes,
		type: PropTypes.oneOf(ContactLinkTypeValues)
	};

	static defaultProps = Link.defaultProps;

	render() {

		const {
			className,
			type,
			children,
			...props
		} = this.props;
		let Icon = null;

		switch (type) {

			case ContactLinkTypeVariant.Telegram:
				Icon = TelegramIcon;
				break;

			case ContactLinkTypeVariant.Email:
				Icon = EmailIcon;
				break;

			case ContactLinkTypeVariant.Twitter:
				Icon = TwitterIcon;
				break;

			case ContactLinkTypeVariant.Vk:
				Icon = VkIcon;
				break;

			case ContactLinkTypeVariant.Facebook:
				Icon = FacebookIcon;
				break;

			case ContactLinkTypeVariant.Meetup:
				Icon = MeetupIcon;
				break;

			case ContactLinkTypeVariant.Github:
				Icon = GuthubIcon;
				break;

			case ContactLinkTypeVariant.Site:
				Icon = SiteIcon;
				break;

			default:
		}

		return (
			<Link
				{...props}
				className={style(classes.root, className)}
				icon={<Icon/>}
				target={type !== ContactLinkTypeVariant.Email ? '_blank' : null}
			>
				{children && (
					<SROnly>
						<span>
							{children}
						</span>
					</SROnly>
				)}
			</Link>
		);
	}
}
