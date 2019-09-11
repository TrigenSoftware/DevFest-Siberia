import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './Spinner.st.css';

export type IProps = HTMLAttributes<HTMLDivElement>;

export default class Spinner extends Component<IProps> {

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
				<svg
					className={classes.circular}
					viewBox='25 25 50 50'
				>
					<circle
						className={classes.path}
						cx='50'
						cy='50'
						r='20'
						fill='none'
						strokeWidth='2'
						strokeMiterlimit='10'
					/>
				</svg>
				{children}
			</div>
		);
	}
}
