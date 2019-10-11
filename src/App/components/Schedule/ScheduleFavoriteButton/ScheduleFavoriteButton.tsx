import React, {
	Component
} from 'react';
import Button, {
	IProps as IButtonProps
} from '../../Button';
import {
	style,
	classes
} from './ScheduleFavoriteButton.st.css';
import StarIcon from '~/icons/star1.svg';

interface IProps extends IButtonProps {
	active: boolean;
}

export class ScheduleFavoriteButton extends Component<IProps> {

	render() {

		const {
			className,
			active,
			...props
		} = this.props;

		return (
			<Button
				{...props}
				className={style(classes.root, {
					active
				}, className)}
				icon={<StarIcon/>}
			/>
		);
	}
}
