import React, {
	HTMLAttributes,
	Component
} from 'react';
import {
	LocationDescriptor
} from 'history';
import PropTypes from 'prop-types';
import {
	CombinePropsAndAttributes
} from '@flexis/ui/helpers';
import Link from '../Link';
import {
	style,
	classes
} from './PartnerCard.st.css';

interface ISelfProps {
	src: string;
	name: string;
	to: LocationDescriptor;
	text?: string;
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLElement>
>;

export default class PartnerCard extends Component<IProps> {

	static propTypes = {
		src:  PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		to:   PropTypes.any.isRequired,
		text: PropTypes.string
	};

	render() {

		const {
			className,
			src,
			name,
			to,
			text,
			...props
		} = this.props;

		return (
			<article
				{...props}
				className={style(classes.root, className)}
			>
				<figure
					className={classes.logo}
				>
					<img
						src={src}
						loading='lazy'
					/>
				</figure>
				<div
					className={classes.info}
				>
					<h3
						className={classes.title}
					>
						{name}
					</h3>
					<Link
						className={classes.link}
						to={to}
						target='_blank'
					>
						{to}
					</Link>
					{text && (
						<p
							className={classes.text}
						>
							{text}
						</p>
					)}
				</div>
			</article>
		);
	}
}
