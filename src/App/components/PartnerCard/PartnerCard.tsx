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
	title: string;
	href: LocationDescriptor;
	text?: string;
}

export type IProps = CombinePropsAndAttributes<
	ISelfProps,
	HTMLAttributes<HTMLElement>
>;

export default class PartnerCard extends Component<IProps> {

	static propTypes = {
		src:   PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		href:  PropTypes.any.isRequired,
		text:  PropTypes.string
	};

	render() {

		const {
			src,
			title,
			href,
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
						{title}
					</h3>
					<Link
						{...stylesheet('link')}
						to={href}
						target='_blank'
					>
						{href}
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
