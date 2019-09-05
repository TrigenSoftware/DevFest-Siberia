import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	getFooterVisitorsLinks,
	getFooterDevFestsLinks,
	getFooterSocialLinks
} from '~/services/i18n';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Link from '~/components/Link';
import ContactLink from '~/components/ContactLink';
import EnvelopeIcon from '~/icons/envelope.svg';
import stylesheet from './Footer.st.css';

export type IProps = ISectionProps;

export default class Footer extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			context,
			props
		} = this;
		const visitorsLinks = getFooterVisitorsLinks(context);
		const devFestsLinks = getFooterDevFestsLinks(context);
		const socialLinks = getFooterSocialLinks(context);

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
						{visitorsLinks.map(({
							link,
							label
						}) => (
							<li key={link}>
								<Link
									{...stylesheet('link')}
									to={link}
								>
									{label}
								</Link>
							</li>
						))}
						<li
							{...stylesheet('separator')}
						/>
						{devFestsLinks.map(({
							link,
							label
						}) => (
							<li key={link}>
								<Link
									{...stylesheet('link')}
									to={link}
									target='_blank'
								>
									{label}
								</Link>
							</li>
						))}
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
								href='mailto:devfest@gdg-siberia.com'
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
								href='mailto:devfest@gdg-siberia.com'
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
							{socialLinks.map(({
								link,
								label
							}) => (
								<ContactLink
									key={link}
									{...stylesheet('contactLink')}
									title={label}
									type={label.toLowerCase()}
									href={link}
									target='_blank'
								/>
							))}
						</li>
					</ul>
				</Section>
			</footer>
		);
	}
}
