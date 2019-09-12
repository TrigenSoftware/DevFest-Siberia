import React, {
	HTMLAttributes,
	Component
} from 'react';
import Spinner from '../Spinner';
import {
	style,
	classes
} from './Loading.st.css';

export type IProps = HTMLAttributes<HTMLDivElement>;

export default class Loading extends Component<IProps> {

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
				<Spinner>
					{children}
				</Spinner>
			</div>
		);
	}
}
