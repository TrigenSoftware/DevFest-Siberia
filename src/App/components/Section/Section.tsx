import React, {
	HTMLAttributes,
	Component
} from 'react';
import stylesheet from './Section.st.css';

export type IProps = HTMLAttributes<HTMLElement>;

export default class Section extends Component<IProps> {

	render() {

		const {
			children,
			...props
		} = this.props;

		return (
			<section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<main
					{...stylesheet('center')}
				>
					{children}
				</main>
			</section>
		);
	}
}
