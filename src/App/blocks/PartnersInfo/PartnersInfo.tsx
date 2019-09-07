/* tslint:disable:no-magic-numbers */
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
	omit
} from '@flexis/ui/helpers';
import {
	getPartnersTypes,
	getPartnersInfo
} from '~/services/i18n';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Link from '~/components/Link';
import Button from '~/components/Button';
import ToggleNav, {
	ToggleNavLink
} from '~/components/ToggleNav';
import PartnerCard from '~/components/PartnerCard';
import {
	routeProps
} from '../common/router';
import {
	style,
	classes
} from './PartnersInfo.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

export class PartnersInfo extends Component<IProps> {

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
		const type = new URLSearchParams(search).get('type');
		const nav = getPartnersTypes(context);
		const partners = getPartnersInfo(context, type);
		const columns = [[], [], []];

		partners.forEach((item, i) => {

			switch (true) {

				case i % 3 === 0:
					columns[2].push(item);
					break;

				case i % 2 === 0:
					columns[1].push(item);
					break;

				default:
					columns[0].push(item);
			}
		});

		return (
			<Section
				{...omit(props, routeProps)}
				className={style(classes.root, className)}
			>
				<div
					className={classes.group}
				>
					<h2>
						{__x`partners.title`}
					</h2>
					<Link
						className={classes.link}
						href='mailto:devfest@gdg-siberia.com'
						disguised
					>
						<Button
							variant='secondary'
						>
							{__x`partners.cfp`}
						</Button>
					</Link>
				</div>
				<ToggleNav
					className={classes.nav}
				>
					{nav.map(item => (
						<ToggleNavLink
							key={item.type}
							to={`/partners?type=${item.type}`}
						>
							{item.label}
						</ToggleNavLink>
					))}
				</ToggleNav>
				<Link
					className={style(classes.link, {
						mobile: true
					})}
					href='mailto:devfest@gdg-siberia.com'
					disguised
				>
					<Button
						variant='secondary'
					>
						{__x`partners.cfp`}
					</Button>
				</Link>
				<ul
					className={classes.list}
				>
					{columns.map((item, i) =>
						item.length !== 0 && (
							<li
								key={i}
							>
								{item.map(partner => (
									<PartnerCard
										className={classes.card}
										key={partner.href}
										{...partner}
										to={partner.href}
										name={partner.title}
									/>
								))}
							</li>
						)
					)}
				</ul>
			</Section>
		);
	}
}

export default withRouter(PartnersInfo);
