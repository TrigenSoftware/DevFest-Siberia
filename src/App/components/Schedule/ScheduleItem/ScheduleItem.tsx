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

interface ISpeaker {
	name: string;
	description: string;
}

interface ISelfProps {
	time: ReactNode;
	lang?: string;
	location: ReactNode;
	title: ReactNode;
	status: ScheduleItemStatus;
	speakers?: ISpeaker[];
	statusLabel?: ReactNode;
	talkTypeBadge?: string;
	talkLevelBadge?: string;
	favorite?: boolean;
	value?: string;
	favoriteLabel?: string;
	onFavoriteClick?(isFavorite: boolean, event: MouseEvent<HTMLButtonElement>);
}

export type IScheduleItemProps = CombinePropsAndAttributes<
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

export class ScheduleItem extends Component<IScheduleItemProps> {

	static propTypes = {
		time:            PropTypes.node.isRequired,
		lang:            PropTypes.string,
		location:        PropTypes.node.isRequired,
		title:           PropTypes.node.isRequired,
		status:          PropTypes.oneOf(ScheduleItemStatusValues),
		speakers:        PropTypes.any,
		statusLabel:     PropTypes.node,
		talkTypeBadge:   PropTypes.string,
		talkLevelBadge:  PropTypes.string,
		favorite:        PropTypes.bool,
		value:           PropTypes.string,
		favoriteLabel:   PropTypes.string,
		onFavoriteClick: PropTypes.func
	};

	render() {

		const {
			className,
			time,
			lang,
			location,
			title,
			status,
			speakers,
			statusLabel,
			talkTypeBadge,
			talkLevelBadge,
			favorite,
			value,
			favoriteLabel,
			onFavoriteClick,
			...props
		} = this.props;
		const color = talkTypeBadge && talkTypeColors[talkTypeBadge.toLowerCase()];

		return (
			<tr
				{...props}
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
						<div>
							<div
								className={classes.lang}
							>
								{lang}
							</div>
							<div
								className={classes.location}
							>
								{location}
							</div>
						</div>
						<ul
							className={classes.list}
						>
							{speakers && speakers.map((speaker, index) => (
								<li
									key={index}
									className={classes.item}
								>
									<div
										className={classes.speaker}
									>
										{speaker.name}
									</div>
									<div
										className={classes.about}
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

		if (typeof onFavoriteClick === 'function') {
			onFavoriteClick(favorite, event);
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
