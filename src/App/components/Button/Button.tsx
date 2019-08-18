import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import FlexisButton, {
	IProps as IFlexisButtonProps
} from '@flexis/ui/components/Button';
import unsetSize from '../common/unsetSize';
import stylesheet from './Button.st.css';

export enum VariantVariant {
	Primary = 'primary',
	Secondary = 'secondary'
}

export type Variant = 'primary'| 'secondary';

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
			variant,
			icon,
			children,
			...props
		} = this.props;

		return(
			<FlexisButton
				{...props}
				{...stylesheet('root', {
					[variant]: Boolean(variant)
				}, props)}
				icon={unsetSize(icon)}
			>
				{children}
			</FlexisButton>
		);
	}
}
