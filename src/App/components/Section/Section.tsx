import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	style,
	classes
} from './Section.st.css';

export type IProps = HTMLAttributes<HTMLElement>;

export default class Section extends Component<IProps> {

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<section
				{...props}
				className={style(classes.root, className)}
			>
				<main
					className={classes.center}
				>
					{children}
				</main>
			</section>
		);
	}
}
