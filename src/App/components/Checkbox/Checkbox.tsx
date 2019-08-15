import React, {
	Component
} from 'react';
import FlexisCheckbox, {
	IProps
} from '@flexis/ui/components/Checkbox';
import stylesheet from './Checkbox.st.css';

export {
    IProps
};

export default class Checkbox extends Component<IProps> {

	static propTypes = FlexisCheckbox.propTypes;

	render() {

		const {
			props
		} = this;

		return (
			<FlexisCheckbox
				{...props}
				{...stylesheet('root', {}, props)}
			/>
		);
	}
}
