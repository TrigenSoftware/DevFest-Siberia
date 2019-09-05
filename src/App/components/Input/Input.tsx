import React, {
	Component
} from 'react';
import FlexisInput, {
	IProps
} from '@flexis/ui/components/Input';
import stylesheet from './Input.st.css';

export default class Input extends Component<IProps> {

	static propTypes = FlexisInput.propTypes;
	static defaultProps = FlexisInput.defaultProps;

	render() {

		const {
			props
		} = this;

		return (
			<FlexisInput
				{...props}
				{...stylesheet('root', {}, props)}
			/>
		);
	}
}
