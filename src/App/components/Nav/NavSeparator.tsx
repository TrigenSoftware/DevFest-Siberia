import React, {
	HTMLAttributes,
	Component
} from 'react';
import stylesheet from './Nav.st.css';

export type INavSeparatorProps = HTMLAttributes<HTMLDivElement>;

export class NavSeparator extends Component<INavSeparatorProps> {

	render() {

		const {
			props
		} = this;

		return (
			<div
				{...props}
				{...stylesheet('separator')}
			/>
		);
	}
}
