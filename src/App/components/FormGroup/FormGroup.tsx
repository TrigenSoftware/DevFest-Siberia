import React, {
	Component
} from 'react';
import FlexisFormGroup, {
	IProps
} from '@flexis/ui/components/FormGroup';
import stylesheet from './FormGroup.st.css';

export {
	IProps
};

export default class FormGroup extends Component<IProps> {

	static propTypes = FlexisFormGroup.propTypes;
	static defaultProps = FlexisFormGroup.defaultProps;

	render() {

		const {
			description,
			children,
			...props
		} = this.props;

		return (
			<FlexisFormGroup
				{...props}
				{...stylesheet('root', {}, props)}
				label={this.renderLabel()}
				description=''
			>
				{children}
			</FlexisFormGroup>
		);
	}

	private renderLabel() {

		const {
			label,
			description
		} = this.props;

		if (label && description) {
			return (
				<>
					<span>{label}</span>
					<span>{description}</span>
				</>
			);
		}

		return label;
	}
}
