import React, {
	Component
} from 'react';
import {
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Link from '~/components/Link';
import ContactLink from '~/components/ContactLink';
import EnvelopeIcon from '~/icons/envelope.svg';
import stylesheet from './Footer.st.css';

export type IProps = ISectionProps;

export default class Footer extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<footer
				{...stylesheet('root', {}, props)}
			>
				<Section
					{...props}
					{...stylesheet('section')}
				>
					<ul
						{...stylesheet('list')}
					>
						<li>
							<h3>
								{__x`footer.visitors`}
							</h3>
						</li>
						<li>
							<Link
								{...stylesheet('link')}
								to='/rules'
							>
								{__x`footer.coc`}
							</Link>
						</li>
						<li>
							<Link
								{...stylesheet('link')}
								to='/students'
							>
								{__x`footer.students`}
							</Link>
						</li>
						<li
							{...stylesheet('separator')}
						/>
						<li>
							<Link
								{...stylesheet('link')}
								to='/devfest2018'
							>
								DevFest 2018
							</Link>
						</li>
						<li>
							<Link
								{...stylesheet('link')}
								to='/devfest2017'
							>
								DevFest 2017
							</Link>
						</li>
						<li>
							<Link
								{...stylesheet('link')}
								to='/devfest2016'
							>
								DevFest 2016
							</Link>
						</li>
					</ul>
					<ul
						{...stylesheet('list')}
					>
						<li>
							<h3>
								{__x`footer.companies`}
							</h3>
						</li>
						<li>
							<Link
								{...stylesheet('link')}
								to='/partners'
							>
								{__x`footer.partner`}
							</Link>
						</li>
					</ul>
					<ul
						{...stylesheet('list')}
					>
						<li>
							<h3>
								{__x`footer.contact`}
							</h3>
						</li>
						<li>
							<Link
								icon={<EnvelopeIcon/>}
								to='/contacts'
							>
								devfest@gdg-siberia.com
							</Link>
						</li>
						<li
							{...stylesheet('separator')}
						/>
						<li>
							<h3>
								{__x`footer.socials`}
							</h3>
						</li>
						<li>
							<ContactLink
								{...stylesheet('contactLink')}
								type='telegram'
								to='/telegram'
							>
								Telegram
							</ContactLink>
							<ContactLink
								{...stylesheet('contactLink')}
								type='twitter'
								to='/twitter'
							>
								Twitter
							</ContactLink>
							<ContactLink
								{...stylesheet('contactLink')}
								type='vk'
								to='/vk'
							>
								VK
							</ContactLink>
						</li>
					</ul>
				</Section>
			</footer>
		);
	}
}
