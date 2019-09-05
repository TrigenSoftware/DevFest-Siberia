import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import FlexisFormGroup, {
	IProps as IFlexisFormGroupProps
} from '@flexis/ui/components/FormGroup';
import stylesheet from './FormGroup.st.css';

export interface IProps extends IFlexisFormGroupProps {
	notice?: string;
}

export default class FormGroup extends Component<IProps> {

	static propTypes = {
		...FlexisFormGroup.propTypes,
		notice: PropTypes.string
	};

	static defaultProps = FlexisFormGroup.defaultProps;

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<FlexisFormGroup
				{...props}
				{...stylesheet('root', {}, props)}
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
				<>
					<span>{label}</span>
					<span>{notice}</span>
				</>
			);
		}

		return label;
	}
}
