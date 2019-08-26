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
import stylesheet from './PartnerCard.st.css';

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
			src,
			name,
			to,
			text,
			...props
		} = this.props;

		return (
			<article
				{...stylesheet('root', {}, props)}
			>
				<figure
					{...stylesheet('logo')}
				>
					<img src={src}/>
				</figure>
				<div
					{...stylesheet('info')}
				>
					<h3
						{...stylesheet('title')}
					>
						{name}
					</h3>
					<Link
						{...stylesheet('link')}
						to={to}
					>
						{to}
					</Link>
					{text && (
						<p
							{...stylesheet('text')}
						>
							{text}
						</p>
					)}
				</div>
			</article>
		);
	}
}
