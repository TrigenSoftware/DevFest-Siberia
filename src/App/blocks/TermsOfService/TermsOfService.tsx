import React, {
	ContextType,
	Component
} from 'react';
import {
	RouteComponentProps,
	withRouter
} from 'react-router-dom';
import {
	I18nContext,
	__x
} from 'i18n-for-react';
import {
	getLocalizedPath
} from '~/services/i18n';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
import {
	addSearchParams
} from '../common/router';
import {
	style,
	classes
} from './TermsOfService.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

export class TermsOfService extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			location: {
				search
			},
			...props
		} = this.props;
		const {
			context
		} = this;
		const сonditions = new URLSearchParams(search).get('сonditions');

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
						to={{
							pathname: getLocalizedPath(context, '/terms'),
							search:   addSearchParams(search, {
								сonditions: 'consent'
							})
						}}
					>
						{__x`terms.consent`}
					</ToggleNavLink>
					<ToggleNavLink
						to={{
							pathname: getLocalizedPath(context, '/terms'),
							search:   addSearchParams(search, {
								сonditions: 'offer'
							})
						}}
					>
						{__x`terms.offer`}
					</ToggleNavLink>
				</ToggleNav>
				<article
					className={classes.article}
				>
					{сonditions === 'consent' && (
						<>
							<p>
								{__x`terms.rules`}
							</p>
							<p>
								{__x`terms.about`}
							</p>
						</>
					)}
					{сonditions === 'offer' && (
						<>
							<p>
								{__x`terms.rules`}
							</p>
						</>
					)}
				</article>
			</Section>
		);
	}
}

export default withRouter(TermsOfService);
