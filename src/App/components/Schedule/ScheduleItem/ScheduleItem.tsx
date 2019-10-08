import React, {
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
	IProps as IBadgeProps
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
	time: string;
	location: string;
	title: string;
	status: ScheduleItemStatus;
	speaker?: string;
	description?: string;
	statusLabel?: string;
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
		time:            PropTypes.string.isRequired,
		location:        PropTypes.string.isRequired,
		title:           PropTypes.string.isRequired,
		status:          PropTypes.oneOf(ScheduleItemStatusValues),
		speaker:         PropTypes.string,
		description:     PropTypes.string,
		statusLabel:     PropTypes.string,
		talkTypeBadge:   PropTypes.string,
		talkLevelBadge:  PropTypes.string,
		favorite:        PropTypes.bool,
		onFavoriteClick: PropTypes.any
	};

	render() {

		const {
			className,
			title,
			status,
			speaker,
			description,
			statusLabel,
			talkTypeBadge,
			talkLevelBadge,
			favorite,
			...props
		} = this.props;
		const color = talkTypeBadge && talkTypeBadge.toLowerCase();

		return (
			<article
				{...omit(props, [
					'time',
					'location'
				])}
				className={style(classes.root, {
					[status]: Boolean(status),
					[color]:  Boolean(color)
				}, className)}
			>
				<section
					className={classes.secondary}
				>
					{this.renderTime()}
					{this.renderLocation()}
				</section>
				<main>
					{statusLabel && (
						<section
							className={classes.auxiliary}
						>
							<h3
								className={classes.content}
							>
								{statusLabel}
							</h3>
						</section>
					)}
					<section
						className={classes.primary}
					>
						<h3
							className={classes.title}
						>
							{title}
						</h3>
						{speaker && description && (
							<div
								className={classes.description}
							>
								<span>
									{speaker}{' | '}
								</span>
								{description}
							</div>
						)}
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
				</main>
			</article>
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

	private renderTime() {

		const {
			time
		} = this.props;
		const [
			talkTime,
			format
		] = time.split(' ');

		return (
			<div
				className={classes.time}
			>
				{talkTime}
				{format && (
					<span>{' '}{format}</span>
				)}
			</div>
		);
	}

	private renderLocation() {

		const {
			location
		} = this.props;
		const [
			place,
			floor
		] = location.split(',');

		return (
			<div
				className={classes.location}
			>
				{place}{','}
				<br />
				{floor && (
					<span>{floor}</span>
				)}
			</div>
		);
	}

	private renderBadge(type: string) {

		if (!type) {
			return null;
		}

		let props: Partial<IBadgeProps> = {};

		switch (type.toLowerCase()) {

			case 'mobile':
				props = {
					variant: this.getBadgeVariant(),
					color: 'pink'
				};
				break;

			case 'frontend':
				props = {
					variant: this.getBadgeVariant(),
					color: 'purple'
				};
				break;

			case 'backend':
				props = {
					variant: this.getBadgeVariant(),
					color: 'blue'
				};
				break;

			case 'hype':
				props = {
					variant: this.getBadgeVariant(),
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

	private getBadgeVariant() {

		const {
			status
		} = this.props;

		return status === VariantScheduleItemStatus.Now
			? 'outline'
			: 'fill';
	}
}
