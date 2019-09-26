import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './TickerPreviewPrimary.st.css';

export type ITickerPreviewPrimaryProps = HTMLAttributes<HTMLElement>;

export class TickerPreviewPrimary extends Component<ITickerPreviewPrimaryProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<main
				{...props}
				className={style(classes.root, className)}
			>
				<div
					className={classes.info}
				>
					{children}
				</div>
			</main>
		);
	}
}
