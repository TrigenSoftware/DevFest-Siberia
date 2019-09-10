import React, {
	ReactElement,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	omit
} from '@flexis/ui/helpers';
import FlexisFormGroup, {
	IProps as IFlexisFormGroupProps
} from '@flexis/ui/components/FormGroup';
import {
	style,
	classes
} from './FormGroup.st.css';

export interface IProps extends IFlexisFormGroupProps {
	notice?: string|ReactElement<any>;
}

export default class FormGroup extends Component<IProps> {

	static propTypes = {
		...FlexisFormGroup.propTypes,
		notice: PropTypes.any
	};

	static defaultProps = FlexisFormGroup.defaultProps;

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<FlexisFormGroup
				{...omit(props, ['notice'])}
				className={style(classes.root, className)}
				label={this.renderLabel()}
			>
				{children}
			</FlexisFormGroup>
		);
	}

	private renderLabel() {

		const {
			label,
			notice
		} = this.props;

		if (label && notice) {
			return (
				<span
					className={classes.notice}
				>
					<span>{label}</span>
					<span>{notice}</span>
				</span>
			);
		}

		return label;
	}
}
