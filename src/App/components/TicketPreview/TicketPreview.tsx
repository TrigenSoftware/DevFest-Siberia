import React, {
	HTMLAttributes,
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import {
	style,
	classes
} from './TicketPreview.st.css';

export * from './TickerPreviewPrimary';
export * from './TickerPreviewGroup';
export * from './TickerPreviewField';
export * from './TicketPreviewAuxiliary';
export * from './TicketPreviewPrice';
export * from './TicketPreviewSale';
export * from './TicketPreviewButton';
export * from './TicketPreviewDescription';

interface ISelfProps {
	vertical?: boolean;
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLElement>
>;

export default class TicketPreview extends Component<IProps> {

	static propTypes = {
		vertical: PropTypes.bool
	};

	static defaultProps = {
		vertical: false
	};

	render() {

		const {
			className,
			vertical,
			children,
			...props
		} = this.props;

		return (
			<figure
				{...props}
				className={style(classes.root, {
					vertical
				}, className)}
			>
				<div
					className={classes.content}
				>
					{children}
				</div>
			</figure>
		);
	}
}
