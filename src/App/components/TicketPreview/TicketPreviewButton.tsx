import React, {
	Component
} from 'react';
import Link, {
	IProps as ILinkProps
} from '../Link';
import Button from '../Button';
import {
	classes
} from './TicketPreview.st.css';

export type IProps = ILinkProps;

export class TicketPreviewButton extends Component<IProps> {

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
				className={classes.button}
				disguised
			>
				<Button
					variant='secondary'
				>
					{children}
				</Button>
			</Link>
		);
	}
}
