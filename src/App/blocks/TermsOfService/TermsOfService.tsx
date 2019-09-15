import React, {
	Component
} from 'react';
import {
	RouteComponentProps,
	withRouter
} from 'react-router-dom';
import {
	__x
} from 'i18n-for-react';
import {
	omit
} from '@flexis/ui/helpers';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
import {
	routeProps
} from '../common/router';
import {
	style,
	classes
} from './TermsOfService.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

export class TermsOfService extends Component<IProps> {

	render() {

		const {
			className,
			location: {
				search
			},
			...props
		} = this.props;

		return (
			<Section
				{...omit(props, routeProps)}
				className={style(classes.root, className)}
			>
				<h2>
					{__x`terms.title`}
				</h2>
				<ToggleNav
					className={classes.nav}
				>
					<ToggleNavLink
						to={{
							pathname: '/terms',
							search
						}}
					>
						{__x`terms.consent`}
					</ToggleNavLink>
					<ToggleNavLink
						href='/some.pdf'
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

export default withRouter(TermsOfService);
