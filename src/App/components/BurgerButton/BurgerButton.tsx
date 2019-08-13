import React, {
	ButtonHTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import stylesheet from './BurgerButton.st.css';

interface ISelfProps {
	active: boolean;
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	ButtonHTMLAttributes<HTMLButtonElement>
>;

export default class BurgerButton extends Component<IProps> {

	static propTypes = {
		active: PropTypes.bool.isRequired
	};

	render() {

		const {
			active,
			...props
		} = this.props;

		return (
			<button
				{...props}
				{...stylesheet('root', {
					active: Boolean(active)
				}, props)}
			>
				<span/>
			</button>
		);
	}
}
