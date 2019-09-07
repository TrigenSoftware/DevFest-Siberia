import React, {
	Component
} from 'react';
import Link, {
	IProps
} from '../Link';
import {
	style,
	classes
} from './Nav.st.css';

export class NavLink extends Component<IProps> {

	static propTypes = Link.propTypes;
	static defaultProps = Link.defaultProps;

	render() {

		const {
			className,
			children,
			...props
		} = this.props;

		return (
			<li
				className={classes.item}
			>
				<Link
					{...props}
					className={style(classes.link, className)}
				>
					{children}
				</Link>
			</li>
		);
	}
}
