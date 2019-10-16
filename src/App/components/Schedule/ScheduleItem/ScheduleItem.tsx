import React, {
	ReactNode,
	MouseEvent,
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	Bind,
	CombinePropsAndAttributes,
	omit
} from '@flexis/ui/helpers';
import Badge, {
	IProps as IBadgeProps,
	Variant,
	Color
} from '../../Badge';
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

export type ScheduleItemStatus = 'past' | 'now' | 'next';

interface ISelfProps {
	time: ReactNode;
	location: ReactNode;
	title: ReactNode;
	status: ScheduleItemStatus;
	speaker?: ReactNode;
	description?: ReactNode;
	statusLabel?: ReactNode;
	talkTypeBadge?: string;
	talkLevelBadge?: string;
	favorite?: boolean;
	onFavoriteClick?(isFavorite: boolean, event: MouseEvent<HTMLButtonElement>);
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLElement>
>;

export const ScheduleItemStatusValues: ScheduleItemStatus[] = Object.values(VariantScheduleItemStatus);

const talkTypeColors: Record<string, Color> = {
	'all':          'darkblue',
	'mobile':       'pink',
	'data science': 'orange',
	'frontend':     'purple',
	'devops':       'aqua',
	'security':     'yellow',
	'backend':      'blue',
	'hype':         'green',
	'web':          'darkpink'
};

export class ScheduleItem extends Component<IProps> {

	static propTypes = {
		time:            PropTypes.node.isRequired,
		location:        PropTypes.node.isRequired,
		title:           PropTypes.node.isRequired,
		status:          PropTypes.oneOf(ScheduleItemStatusValues),
		speaker:         PropTypes.node,
		description:     PropTypes.node,
		statusLabel:     PropTypes.node,
		talkTypeBadge:   PropTypes.string,
		talkLevelBadge:  PropTypes.string,
		favorite:        PropTypes.bool,
		onFavoriteClick: PropTypes.func
	};

	render() {

		const {
			className,
			title,
			time,
			location,
			status,
			speaker,
			description,
			statusLabel,
			talkTypeBadge,
			talkLevelBadge,
			favorite,
			...props
		} = this.props;
		const color = talkTypeBadge && talkTypeColors[talkTypeBadge.toLowerCase()];

		return (
			<tr
				{...omit(props, ['onFavoriteClick'])}
				className={style(classes.root, {
					[status]: Boolean(status),
					[color]:  Boolean(color)
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
					<h4
						className={classes.title}
					>
						{title}
					</h4>
					<div
						className={classes.group}
					>
						<div
							className={classes.location}
						>
							{location}
						</div>
						<div
							className={classes.info}
						>
							<div
								className={classes.speaker}
							>
								{speaker}
							</div>
							<div
								className={classes.about}
							>
								{description}
							</div>
						</div>
					</div>
					{this.renderBadge(talkTypeBadge)}
					{this.renderBadge(talkLevelBadge)}
				</td>
				<td
					className={classes.controls}
				>
					{status !== VariantScheduleItemStatus.Past && (
						<ScheduleFavoriteButton
							onClick={this.onFavoriteClick}
							active={favorite}
						/>
					)}
				</td>
			</tr>
		);
	}

	@Bind()
	private onFavoriteClick(event: MouseEvent<HTMLButtonElement>) {

		const {
			onFavoriteClick,
			favorite
		} = this.props;

		onFavoriteClick(favorite, event);
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

			case 'junior':
				props = {
					color: 'aqua'
				};
				break;

			case 'middle':
				props = {
					color: 'blue'
				};
				break;

			case 'senior':
				props = {
					color: 'darkblue'
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
