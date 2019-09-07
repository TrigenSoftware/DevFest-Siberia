import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import FlexisButton, {
	IProps as IFlexisButtonProps
} from '@flexis/ui/components/Button';
import unsetSize from '../common/unsetSize';
import {
	style,
	classes
} from './Button.st.css';

export enum VariantVariant {
	Primary = 'primary',
	Secondary = 'secondary',
	Alt = 'alt'
}

export type Variant = 'primary'|'secondary'|'alt';

export interface IProps extends IFlexisButtonProps {
	variant?: Variant;
}

export const VariantValues: Variant[] = Object.values(VariantVariant);

export default class Button extends Component<IProps> {

	static propTypes = {
		...FlexisButton.propTypes,
		variant: PropTypes.oneOf(VariantValues)
	};

	static defaultProps = {
		...FlexisButton.defaultProps,
		variant: 'primary'
	};

	render() {

		const {
			className,
			variant,
			icon,
			children,
			...props
		} = this.props;

		return(
			<FlexisButton
				{...props}
				className={style(classes.root, {
					[variant]: Boolean(variant)
				}, className)}
				icon={unsetSize(icon)}
			>
				{children}
			</FlexisButton>
		);
	}
}
