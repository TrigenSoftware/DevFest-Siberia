import React, {
	Children,
	Component
} from 'react';
import stylesheet from './Navigator.st.css';

export default class Navigator extends Component {

	render() {

		const {
			children
		} = this.props;

		return (
			<nav
				{...stylesheet('root', {}, this.props)}
			>
				<ul
					{...stylesheet('list')}
				>
					{Children.map(children, child => child && (
						<li
							{...stylesheet('item')}
						>
							{child}
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
