import React, {
	ReactNode,
	MouseEvent,
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	Bind,
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import Badge, {
	IProps as IBadgeProps,
	Variant
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
		const colorsMap = {
			'frontend': 'purple',
			'mobile':   'pink',
			'backend':  'blue',
			'hype':     'green'
		};
		const color = talkTypeBadge && colorsMap[talkTypeBadge.toLowerCase()];

		return (
			<tr
				{...props}
				className={style(classes.root, {
					[status]: Boolean(status),
					[color]:  Boolean(color)
				}, className)}
			>
				<td
					className={classes.secondary}
				>
					<div
						className={classes.time}
					>
						{time}
					</div>
				</td>
				<td
					className={classes.main}
				>
					<section
						className={classes.primary}
					>
						<h3
							className={classes.title}
						>
							{title}
						</h3>
						<div
							className={classes.group}
						>
							<div
								className={classes.location}
							>
								{location}
							</div>
							{speaker && description && (
								<div
									className={classes.info}
								>
									<div
										className={classes.speaker}
									>
										{speaker}
									</div>
									<div
										className={classes.description}
									>
										{description}
									</div>
								</div>
							)}
						</div>
						{this.renderBadge(talkTypeBadge)}
						{this.renderBadge(talkLevelBadge)}
					</section>
					{status !== VariantScheduleItemStatus.Past && (
						<section
							className={classes.favorite}
						>
							<ScheduleFavoriteButton
								active={favorite}
								onClick={this.onFavoriteClick}
							/>
						</section>
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

		let props: Partial<IBadgeProps> = {};
		const {
			status
		} = this.props;
		const variant: Variant = status === VariantScheduleItemStatus.Now
			? 'outline'
			: 'fill';

		switch (type.toLowerCase()) {

			case 'mobile':
				props = {
					variant,
					color: 'pink'
				};
				break;

			case 'frontend':
				props = {
					variant,
					color: 'purple'
				};
				break;

			case 'backend':
				props = {
					variant,
					color: 'blue'
				};
				break;

			case 'hype':
				props = {
					variant,
					color: 'green'
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
					color: 'red'
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
