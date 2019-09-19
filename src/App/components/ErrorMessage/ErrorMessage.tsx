import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './ErrorMessage.st.css';

export type IProps = HTMLAttributes<HTMLDivElement>;

export default class ErrorMessage extends Component<IProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<div
				{...props}
				className={style(classes.root, className)}
			>
				{children}
			</div>
		);
	}
}
