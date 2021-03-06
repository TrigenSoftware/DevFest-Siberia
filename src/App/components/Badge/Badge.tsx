import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import FlexisBadge, {
	IProps as IFlexisBadgeProps
} from '@flexis/ui/components/Badge';
import {
	style,
	classes
} from './Badge.st.css';

export {
	default as BadgeContainer
} from '@flexis/ui/components/Badge/BadgeContainer';

export enum VariantVariant {
	Fill = 'fill',
	Outline = 'outline'
}

export enum ColorVariant {
	Blue = 'blue',
	DarkBlue = 'darkblue',
	Aqua = 'aqua',
	Pink = 'pink',
	Red = 'red',
	Purple = 'purple',
	Green = 'green',
	LightGreen = 'lightgreen',
	Yellow = 'yellow',
	Orange = 'orange'
}

export type Variant = 'fill'|'outline';

export type Color = 'blue'
	| 'darkblue'
	| 'aqua'
	| 'pink'
	| 'red'
	| 'purple'
	| 'green'
	| 'lightgreen'
	| 'yellow'
	| 'orange';

export interface IProps extends IFlexisBadgeProps {
	variant?: Variant;
	color?: Color;
}

export const VariantValues: Variant[] = Object.values(VariantVariant);
export const ColorValues: Color[] = Object.values(ColorVariant);

export default class Badge extends Component<IProps> {

	static propTypes = {
		...FlexisBadge.propTypes,
		variant: PropTypes.oneOf(VariantValues),
		color:   PropTypes.oneOf(ColorValues)
	};

	static defaultProps = {
		variant: 'outline'
	};

	render() {

		const {
			className,
			variant,
			color,
			children,
			...props
		} = this.props;

		return (
			<FlexisBadge
				{...props}
				className={style(classes.root, {
					[variant]: Boolean(variant),
					[color]:   Boolean(color)
				}, className)}
			>
				{children}
			</FlexisBadge>
		);
	}
}
