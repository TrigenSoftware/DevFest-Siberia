import React, {
	ContextType,
	Component
} from 'react';
import {
	withRouter,
	RouteComponentProps
} from 'react-router-dom';
import {
	I18nContext,
	__ as tr,
	__x
} from 'i18n-for-react';
import {
	Bind
} from '@flexis/ui/helpers';
import {
	getLocalizedPath,
	getVenuePlanFloors
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
} from './VenuePlan.st.css';

export interface IProps extends ISectionProps, RouteComponentProps {}

export class VenuePlan extends Component<IProps> {

	static contextType = I18nContext;

	context!: ContextType<typeof I18nContext>;

	render() {

		const {
			className,
			location: {
				search
			}
		} = this.props;
		const {
			context
		} = this;
		const nav = getVenuePlanFloors(context);
		const __ = context.bind(tr);

		return (
			<Section
				className={style(classes.root, className)}
			>
				<h2
					className={classes.title}
				>
					{__x`venuePlan.title`}
				</h2>
				<div
					className={classes.group}
				>
					<ToggleNav
						className={classes.nav}
					>
						{nav.map(({
							floor,
							label
						}) => (
							<ToggleNavLink
								key={floor}
								to={{
									pathname: getLocalizedPath(context, '/plan'),
									search:   addSearchParams(search, {
										floor
									})
								}}
							>
								{label}
							</ToggleNavLink>
						))}
					</ToggleNav>
					<div
						className={classes.spacer}
					/>
					<ToggleNavLink
						className={classes.link}
						href={__`venuePlan.planUrl`}
					>
						{__x`venuePlan.download`}
					</ToggleNavLink>
				</div>
				<div
					className={classes.content}
				>
					{this.renderPlan()}
				</div>
			</Section>
		);
	}

	componentDidMount() {

		const {
			location: {
				search
			},
			history
		} = this.props;
		const floor = new URLSearchParams(search).get('floor');

		if (!floor) {

			history.push({
				search: addSearchParams(search, {
					floor: '2'
				})
			});
		}
	}

	@Bind()
	private renderPlan() {

		const {
			location: {
				search
			}
		} = this.props;
		const floor = new URLSearchParams(search).get('floor');

		switch (floor) {

			case '3':
				return (
					<div>
						3 этаж - потом добавлю картинки
					</div>
				);

			case '13':
				return (
					<div>
						13 этаж - потом добавлю картинки
					</div>
				);

			default:
				return (
					<div>
						2 этаж - потом добавлю картинки
					</div>
				);
		}
	}
}

export default withRouter(VenuePlan);
