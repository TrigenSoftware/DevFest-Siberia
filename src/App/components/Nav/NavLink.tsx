import React, {
	Component
} from 'react';
import Link, {
	IProps
} from '../Link';
import stylesheet from './Nav.st.css';

export class NavLink extends Component<IProps> {

	static propTypes = Link.propTypes;
	static defaultProps = Link.defaultProps;

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<Link
				{...props}
				{...stylesheet('link')}
			>
				{children}
			</Link>
		);
	}
}
