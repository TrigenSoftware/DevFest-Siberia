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
import SiteIcon from '~/icons/site.svg';
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

			case ContactLinkTypeVariant.Site:
				Icon = SiteIcon;
				break;

			default:
		}

		return (
			<Link
				{...props}
				{...stylesheet('root', {}, props)}
				icon={<Icon/>}
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
