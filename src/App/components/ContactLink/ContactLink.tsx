import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import SROnly from '@flexis/ui/components/SROnly';
import Link, {
	IProps as ILinkProps
} from '../Link';
import TelegramIcon from '~/icons/telegram-icon.svg';
import EmailIcon from '~/icons/email-icon.svg';
import TwitterIcon from '~/icons/twitter-icon.svg';
import VkIcon from '~/icons/vk-icon.svg';
import SiteIcon from '~/icons/site-icon.svg';
import stylesheet from './ContactLink.st.css';

export enum ContactLinkTypeVariant {
	Telegram = 'telegram',
	Email = 'email',
	Twitter = 'twitter',
	Vk = 'vk',
	Site = 'site'
}

export type ContactLinkType = 'telegram' | 'email' | 'twitter' | 'vk' | 'site';

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
			type,
			children,
			...props
		} = this.props;
		let icon = null;

		switch (type) {

			case ContactLinkTypeVariant.Telegram:
				icon = <TelegramIcon/>;
				break;

			case ContactLinkTypeVariant.Email:
				icon = <EmailIcon/>;
				break;

			case ContactLinkTypeVariant.Twitter:
				icon = <TwitterIcon/>;
				break;

			case ContactLinkTypeVariant.Vk:
				icon = <VkIcon/>;
				break;

			case ContactLinkTypeVariant.Site:
				icon = <SiteIcon/>;
				break;

			default:
		}

		return (
			<Link
				{...props}
				{...stylesheet('root', {}, props)}
				icon={icon}
			>
				<SROnly>
					<span>
						{children}
					</span>
				</SROnly>
			</Link>
		);
	}
}
