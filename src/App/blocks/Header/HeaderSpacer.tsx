import React, {
	HTMLAttributes,
	Component
} from 'react';
import stylesheet from './Header.st.css';

export type IProps = HTMLAttributes<HTMLDivElement>;

export class HeaderSpacer extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<div
				{...props}
				{...stylesheet('spacer')}
			/>
		);
	}
}
