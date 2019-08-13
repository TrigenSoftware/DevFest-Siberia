import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import FlexisButton, {
	IProps as IFlexisButtonProps
} from '@flexis/ui/components/Button';
import unsetSize from '../common/unsetSize';
import stylesheet from './Button.st.css';

export type Variant = 'primary';

export interface IProps extends IFlexisButtonProps {
	variant?: Variant;
}

export default class Button extends Component<IProps> {

	static propTypes = {
		...FlexisButton.propTypes,
		variant: PropTypes.string
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
