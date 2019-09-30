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
import {
	style,
	classes
} from './Footer.st.css';
import Offline from '~/components/Offline';

export type IProps = ISectionProps;

export default class Footer extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			...props
		} = this.props;
		const {
			context
		} = this;
		const visitorsLinks = getFooterVisitorsLinks(context);
		const devFestsLinks = getFooterDevFestsLinks(context);
		const socialLinks = getFooterSocialLinks(context);

		return (
			<footer
				className={style(classes.root, className)}
			>
				<Section
					{...props}
					className={classes.section}
				>
					<ul
						className={classes.list}
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
									className={classes.link}
									to={link}
								>
									{label}
								</Link>
							</li>
						))}
						<li
							className={classes.separator}
						/>
						{devFestsLinks.map(({
							link,
							label
						}) => (
							<li key={link}>
								<Link
									className={classes.link}
									to={link}
									target='_blank'
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
					<ul
						className={classes.list}
					>
						<li>
							<h3>
								{__x`footer.companies`}
							</h3>
						</li>
						<li>
							<Link
								className={classes.link}
								href='mailto:devfest@gdg-siberia.com'
							>
								{__x`footer.partner`}
							</Link>
						</li>
						<li
							className={classes.separator}
						/>
					</ul>
					<ul
						className={classes.list}
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
							className={classes.empty}
						/>
						<li
							className={classes.separator}
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
									className={classes.contactLink}
									title={label}
									type={label.toLowerCase()}
									href={link}
									target='_blank'
								/>
							))}
						</li>
					</ul>
				</Section>
				<Offline
					onChange={this.handleChange}
				/>
			</footer>
		);
	}

	private handleChange(isOffline) {
		console.log(isOffline);
	}
}
