import React, {
	Component
} from 'react';
import FlexisSelect, {
	IProps
} from '@flexis/ui/components/Select';
import stylesheet from './Select.st.css';

export {
    IProps
};

export * from './SelectOption';

export default class Select extends Component<IProps> {

	static propTypes = FlexisSelect.propTypes;

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<FlexisSelect
				{...props}
				{...stylesheet('root', {}, props)}
			>
				{children}
			</FlexisSelect>
		);
	}
}
