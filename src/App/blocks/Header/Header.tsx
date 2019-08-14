import React, {
	HTMLAttributes,
	Component
} from 'react';
import Section from '~/components/Section';
import Link from '~/components/Link';
import Logo from '~/icons/logo.svg';
import stylesheet from './Header.st.css';

export * from './HeaderNav';
export * from './HeaderLink';
export * from './HeaderSpacer';

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
					{children}
				</Section>
			</header>
		);
	}
}
