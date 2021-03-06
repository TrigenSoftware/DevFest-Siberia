import React, {
	ReactNode,
	MouseEvent,
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	withRouter,
	RouteComponentProps
} from 'react-router-dom';
import {
	Bind,
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import {
	addSearchParams
} from '~/blocks/common/router';
import Badge, {
	IProps as IBadgeProps,
	Variant,
	Color
} from '../../Badge';
import Button from '../../Button';
import Link from '../../Link';
import {
	ScheduleFavoriteButton
} from '../ScheduleFavoriteButton';
import {
	style,
	classes
} from './ScheduleItem.st.css';

export enum VariantScheduleItemStatus {
	Past = 'past',
	Now = 'now',
	Next = 'next'
}

export enum VariantScheduleItemType {
	Workshop = 'workshop',
	Talk = 'talk'
}

export type ScheduleItemStatus = 'past' | 'now' | 'next';

interface ISpeaker {
	id?: string;
	name: string;
	description: string;
}

interface ISelfProps extends RouteComponentProps {
	id?: string;
	time: ReactNode;
	lang?: string;
	place: ReactNode;
	title: ReactNode;
	status: ScheduleItemStatus;
	speakers?: ISpeaker[];
	statusLabel?: ReactNode;
	talkTypeBadge?: string;
	talkLevelBadge?: string;
	favorite?: boolean;
	value?: string;
	description?: string;
	favoriteLabel?: string;
	workshop?: boolean;
	workshopLabel?: string;
	workshopAddLabel?: string;
	workshopDeleteLabel?: string;
	workshopDisabled?: boolean;
	workshopDisabledLabel?: string;
	onFavoriteClick?(lectureId: string, isFavorite: boolean, event: MouseEvent<HTMLButtonElement>);
	onWorkshopAddClick?(workshopId: string, event: MouseEvent<HTMLButtonElement>);
	onWorkshopDeleteClick?(workshopId: string, event: MouseEvent<HTMLButtonElement>);
}

export type IScheduleItemProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLElement>
>;

export const ScheduleItemStatusValues: ScheduleItemStatus[] = Object.values(VariantScheduleItemStatus);

export const talkTypeColors: Record<string, Color> = {
	'all':          'darkblue',
	'mobile':       'pink',
	'data science': 'orange',
	'frontend':     'purple',
	'devops':       'aqua',
	'security':     'yellow',
	'backend':      'blue',
	'hype':         'green',
	'web':          'lightgreen',
	'beginner':     'aqua',
	'intermediate': 'blue',
	'advanced':     'darkblue'
};

class ScheduleItemWithRouter extends Component<IScheduleItemProps> {

	static propTypes = {
		id:                    PropTypes.string,
		time:                  PropTypes.node.isRequired,
		lang:                  PropTypes.string,
		place:                 PropTypes.node.isRequired,
		title:                 PropTypes.node.isRequired,
		status:                PropTypes.oneOf(ScheduleItemStatusValues),
		speakers:              PropTypes.any,
		statusLabel:           PropTypes.node,
		talkTypeBadge:         PropTypes.string,
		talkLevelBadge:        PropTypes.string,
		favorite:              PropTypes.bool,
		value:                 PropTypes.string,
		description:           PropTypes.string,
		favoriteLabel:         PropTypes.string,
		workshop:              PropTypes.bool,
		workshopLabel:         PropTypes.string,
		workshopAddLabel:      PropTypes.string,
		workshopDeleteLabel:   PropTypes.string,
		workshopDisabled:      PropTypes.bool,
		workshopDisabledLabel: PropTypes.string,
		onFavoriteClick:       PropTypes.func,
		onWorkshopAddClick:    PropTypes.func,
		onWorkshopDeleteClick: PropTypes.func
	};

	render() {

		const {
			className,
			location: {
				search
			},
			time,
			lang,
			place,
			title,
			status,
			speakers,
			talkTypeBadge,
			talkLevelBadge,
			favorite,
			value,
			description,
			favoriteLabel,
			workshop,
			workshopLabel,
			workshopAddLabel,
			workshopDeleteLabel,
			workshopDisabled,
			workshopDisabledLabel,
			onFavoriteClick,
			onWorkshopAddClick,
			onWorkshopDeleteClick
		} = this.props;
		const color = talkTypeBadge && talkTypeColors[talkTypeBadge.toLowerCase()];

		return (
			<tr
				className={style(classes.root, {
					[status]:  Boolean(status),
					[color]:   Boolean(color),
					withBadge: Boolean(talkTypeBadge)
				}, className)}
			>
				<td
					className={classes.time}
				>
					<div
						className={classes.startAt}
					>
						{time}
					</div>
				</td>
				<td
					className={classes.description}
				>
					{!description ? (
						<h4
							className={classes.title}
						>
							{title}
						</h4>
					) : (
						<Link
							className={classes.link}
							to={{
								search: addSearchParams(search, {
									title
								})
							}}
						>
							<h4
								className={classes.title}
							>
								{title}
							</h4>
						</Link>
					)}
					<div
						className={classes.group}
					>
						<div
							className={classes.talkInfo}
						>
							<div
								className={classes.lang}
							>
								{lang}
							</div>
							<div
								className={classes.location}
							>
								{place}
							</div>
						</div>
						<ul
							className={classes.speakersList}
						>
							{speakers && speakers.map((speaker, index) => (
								<li
									key={index}
									className={classes.speaker}
								>
									<Link
										className={classes.speakerName}
										to={{
											search: addSearchParams(search, {
												id: speaker.id
											})
										}}
									>
										{speaker.name}
									</Link>
									<div
										className={classes.speakerDescription}
									>
										{speaker.description}
									</div>
								</li>
							))}
						</ul>
					</div>
					{this.renderBadge(talkTypeBadge)}
					{this.renderBadge(talkLevelBadge)}
				</td>
				{status === VariantScheduleItemStatus.Past ? (
					<td
						className={classes.controls}
					/>
				) : (
					<td
						className={classes.controls}
					>
						{onFavoriteClick && (
							<ScheduleFavoriteButton
								onClick={this.onFavoriteClick}
								title={favoriteLabel}
								active={favorite}
								value={value}
							/>
						)}
						{onWorkshopAddClick && !workshop && !workshopDisabled && (
							<Button
								className={classes.button}
								onClick={this.onWorkshopAddClick}
							>
								{workshopAddLabel}
							</Button>
						)}
						{workshopDisabled && (
							<div
								className={classes.disabled}
							>
								{workshopDisabledLabel}
							</div>
						)}
						{onWorkshopDeleteClick && workshop && !workshopDisabled && (
							<>
								<div
									className={classes.label}
								>
									{workshopLabel}
								</div>
								<Button
									className={classes.delete}
									onClick={this.onWorkshopDeleteClick}
								>
									{workshopDeleteLabel}
								</Button>
							</>
						)}
					</td>
				)}
			</tr>
		);
	}

	@Bind()
	private onFavoriteClick(event: MouseEvent<HTMLButtonElement>) {

		const {
			onFavoriteClick,
			id,
			favorite
		} = this.props;

		if (typeof onFavoriteClick === 'function') {
			onFavoriteClick(id, !favorite, event);
		}
	}

	@Bind()
	private onWorkshopAddClick(event: MouseEvent<HTMLButtonElement>) {

		const {
			onWorkshopAddClick,
			id
		} = this.props;

		if (typeof onWorkshopAddClick === 'function') {
			onWorkshopAddClick(id, event);
		}
	}

	@Bind()
	private onWorkshopDeleteClick(event: MouseEvent<HTMLButtonElement>) {

		const {
			onWorkshopDeleteClick,
			id
		} = this.props;

		if (typeof onWorkshopDeleteClick === 'function') {
			onWorkshopDeleteClick(id, event);
		}
	}

	private renderBadge(type: string) {

		if (!type) {
			return null;
		}

		const {
			status
		} = this.props;
		const variant: Variant = status === VariantScheduleItemStatus.Now
			? 'outline'
			: 'fill';
		const typeId = type.toLowerCase();
		const color = talkTypeColors[typeId];
		let props: Partial<IBadgeProps> = {};

		switch (typeId) {

			case 'all':
				props = {
					variant,
					color
				};
				break;

			case 'mobile':
				props = {
					variant,
					color
				};
				break;

			case 'data science':
				props = {
					variant,
					color
				};
				break;

			case 'frontend':
				props = {
					variant,
					color
				};
				break;

			case 'devops':
				props = {
					variant,
					color
				};
				break;

			case 'security':
				props = {
					variant,
					color
				};
				break;

			case 'backend':
				props = {
					variant,
					color
				};
				break;

			case 'hype':
				props = {
					variant,
					color
				};
				break;

			case 'web':
				props = {
					variant,
					color
				};
				break;

			case 'beginner':
				props = {
					color
				};
				break;

			case 'intermediate':
				props = {
					color
				};
				break;

			case 'advanced':
				props = {
					color
				};
				break;

			default:
		}

		return (
			<Badge
				{...props}
			>
				{type}
			</Badge>
		);
	}
}

export const ScheduleItem = withRouter(ScheduleItemWithRouter);
