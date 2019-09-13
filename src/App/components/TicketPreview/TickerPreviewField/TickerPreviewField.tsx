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
} from './TickerPreviewField.st.css';

interface ISelfProps {
	label?: string;
	value?: string;
}

export type ITickerPreviewFieldProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLDListElement>
>;

export class TickerPreviewField extends Component<ITickerPreviewFieldProps> {

	static propTypes = {
		label: PropTypes.string,
		value: PropTypes.string
	};

	render() {

		const {
			className,
			label,
			value,
			...props
		} = this.props;

		return (
			<dl
				{...props}
				className={style(classes.root, className)}
			>
				<dt
					className={classes.label}
				>
					{label}
				</dt>
				<dd
					className={classes.value}
				>
					{value}
				</dd>
			</dl>
		);
	}
}
