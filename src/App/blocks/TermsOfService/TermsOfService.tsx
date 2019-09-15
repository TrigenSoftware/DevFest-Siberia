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
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
import {
	style,
	classes
} from './TermsOfService.st.css';

export type IProps = ISectionProps;

export default class TermsOfService extends Component<IProps> {

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
		const __ = context.bind(tr);

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<h2>
					{__x`terms.title`}
				</h2>
				<ToggleNav
					className={classes.nav}
				>
					<ToggleNavLink
						to='/terms'
					>
						{__x`terms.consent`}
					</ToggleNavLink>
					<ToggleNavLink
						href={__`terms.url`}
					>
						{__x`terms.offer`}
					</ToggleNavLink>
				</ToggleNav>
				<article
					className={classes.article}
				>
					<p>
						{__x`terms.rules`}
					</p>
					<p>
						{__x`terms.about`}
					</p>
				</article>
			</Section>
		);
	}
}
