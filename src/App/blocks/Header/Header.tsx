import React, {
	ContextType,
	Component
} from 'react';
import {
	withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
import {
	omit
} from '@flexis/ui/helpers';
import {
	getShareLinks
} from '~/services/i18n';
import Section from '~/components/Section';
import Link from '~/components/Link';
import Button from '~/components/Button';
import Share from '~/components/Share';
import Logo from '~/icons/logo.svg';
import {
	routeProps,
	addSearchParams,
	deleteSearchParams
} from '../common/router';
import {
	HeaderNav
} from './HeaderNav';
import {
	HeaderLink
} from './HeaderLink';
import {
	HeaderSpacer
} from './HeaderSpacer';
import HeaderLoginModal from './HeaderLoginModal';
import PaidMessageModal from './PaidMessageModal';
import {
	IProps
} from './types';
import {
	style,
	classes
} from './Header.st.css';

export class Header extends Component<IProps> {

	static contextType = I18nContext;

	static propTypes = {
		login:       PropTypes.func.isRequired,
		logout:      PropTypes.func.isRequired,
		setToken:    PropTypes.func.isRequired,
		isLogged:    PropTypes.func.isRequired,
		clearErrors: PropTypes.func.isRequired,
		user:        PropTypes.any
	};

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			login,
			logout,
			errors,
			isLogged,
			clearErrors,
			location: {
				search
			},
			...props
		} = this.props;
		const {
			context
		} = this;
		const locale = context.getLocale();
		const __ = context.bind(tr);
		const links = getShareLinks(context);
		const logged = isLogged();

		return (
			<>
				<header
					{...omit(props, routeProps)}
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
							{!process.env.DISABLE_RU && (
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
							)}
							<HeaderLink
								to={logged ? '/cabinet' : {
									search: addSearchParams(search, {
										login: true
									})
								}}
							>
								{logged
									? __x`header.profile`
									: __x`header.login`
								}
							</HeaderLink>
						</HeaderNav>
						<ul
							className={classes.controls}
						>
							{logged ? (
								<Button
									className={classes.logout}
									onClick={logout}
								>
									{__x`header.logout`}
								</Button>
							) : (

								<HeaderLink
									to='/buy'
									disguised
								>
									<Button>
										{__x`header.buyTicket`}
									</Button>
								</HeaderLink>
							)}
							<Share
								links={links as any}
							>
								{__`header.share`}
							</Share>
						</ul>
					</Section>
				</header>
				<HeaderLoginModal
					login={login}
					errors={errors}
					clearErrors={clearErrors}
				/>
				<PaidMessageModal/>
			</>
		);
	}

	async componentDidMount() {

		const {
			setToken,
			history,
			location: {
				search
			}
		} = this.props;
		const searchWithParam = /[^\w]authToken=/.test(search);

		if (searchWithParam) {

			await setToken();

			history.push({
				search: deleteSearchParams(search, 'authToken')
			});
		}
	}
}

export default withRouter(Header);
