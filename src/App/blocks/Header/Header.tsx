import React, {
	HTMLAttributes,
	Component
} from 'react';
import Section from '~/components/Section';
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
import stylesheet from './Header.st.css';

export type IProps = HTMLAttributes<HTMLElement>;

export default class Header extends Component<IProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<header
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<Section
					{...stylesheet('section')}
				>
					<Link
						{...stylesheet('logo')}
						to='/'
						icon={<Logo />}
					/>
					<HeaderNav>
						<HeaderSpacer/>
						<HeaderLink
							to='/team'
						>
							Team
						</HeaderLink>
						<HeaderLink
							to='/speaker'
						>
							Become speaker
						</HeaderLink>
						<HeaderSpacer/>
						<HeaderLink
							to='/en'
							separated
						>
							En
						</HeaderLink>
						<HeaderLink
							to='/login'
						>
							Login
						</HeaderLink>
					</HeaderNav>
					<ul
						{...stylesheet('controls')}
					>
						<Link
							disguised
						>
						<Button>
							Buy ticket
						</Button>
						</Link>
						<HeaderLink
							to='/share'
							icon={<Share/>}
						/>
					</ul>
				</Section>
			</header>
		);
	}
}
