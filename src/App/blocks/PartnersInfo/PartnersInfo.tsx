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
	getPartnersTypes,
	getPartners
} from '../common/i18n';
import {
	routeProps
} from '../common/router';
import stylesheet from './PartnersInfo.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

export class PartnersInfo extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			context,
			props
		} = this;
		const {
			location: {
				search
			}
		} = props;
		const type = new URLSearchParams(search).get('type');
		const nav = getPartnersTypes(context);
		const partners = getPartners(context, type);
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
				{...stylesheet('root', {}, props)}
			>
				<div
					{...stylesheet('group')}
				>
					<h2>
						{__x`partners.title`}
					</h2>
					<Link
						{...stylesheet('link')}
						href='https://www.papercall.io/dfsiberia19'
						target='_blank'
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
					{...stylesheet('nav')}
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
					{...stylesheet('link', {
						mobile: true
					})}
					href='https://www.papercall.io/dfsiberia19'
					target='_blank'
					disguised
				>
					<Button
						variant='secondary'
					>
						{__x`partners.cfp`}
					</Button>
				</Link>
				<ul
					{...stylesheet('list')}
				>
					{columns.map((item, i) => (
						item.length !== 0 ? (
							<li
								key={i}
							>
								{item.map(partner => (
									<PartnerCard
										{...stylesheet('card')}
										key={partner.href}
										{...partner}
										to={partner.href}
										name={partner.title}
									/>
								))}
							</li>
						) : null
					))}
				</ul>
			</Section>
		);
	}
}

export default withRouter(PartnersInfo);
