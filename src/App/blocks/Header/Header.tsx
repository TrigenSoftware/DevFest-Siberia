import React, {
	ContextType,
	Component
} from 'react';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Link from '~/components/Link';
import Button from '~/components/Button';
import Logo from '~/icons/logo.svg';
import Share from '~/icons/share.svg';
import {
	HeaderNav
} from './HeaderNav';
import {
	HeaderLink
} from './HeaderLink';
import {
	HeaderSpacer
} from './HeaderSpacer';
import {
	style,
	classes
} from './Header.st.css';

export type IProps = ISectionProps;

export default class Header extends Component<IProps> {

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
		const locale = context.getLocale();
		const __ = context.bind(tr);

		return (
			<header
				{...props}
				className={style(classes.root, className)}
			>
				<Section
					className={classes.section}
				>
					<Link
						className={classes.logo}
						to='/'
						icon={<Logo/>}
						title={__`header.home`}
					/>
					<HeaderNav>
						<HeaderSpacer/>
						<HeaderLink
							to='/team'
						>
							{__x`header.team`}
						</HeaderLink>
						<HeaderLink
							href='https://www.papercall.io/dfsiberia19'
							target='_blank'
						>
							{__x`header.cfp`}
						</HeaderLink>
						<HeaderSpacer/>
						<HeaderLink
							href={`${
								process.env.BASE_URL ? '' : '/'
							}${
								locale === 'en' ? 'ru' : ''
							}`}
							separated
						>
							{__x`header.lang`}
						</HeaderLink>
						<HeaderLink
							to='/login'
						>
							{__x`header.login`}
						</HeaderLink>
					</HeaderNav>
					<ul
						className={classes.controls}
					>
						<HeaderLink
							to='/buy'
							disguised
						>
							<Button>
								{__x`header.buyTicket`}
							</Button>
						</HeaderLink>
						<HeaderLink
							to='/share'
							icon={<Share/>}
							title={__`header.share`}
						/>
					</ul>
				</Section>
			</header>
		);
	}
}
