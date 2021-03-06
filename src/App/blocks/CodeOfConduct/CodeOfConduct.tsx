import React, {
	Component
} from 'react';
import {
	__x
} from 'i18n-for-react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Link from '~/components/Link';
import {
	noSize
} from '~/components/common/unsetSize';
import CocImg from '~/icons/coc.svg';
import {
	style,
	classes
} from './CodeOfConduct.st.css';

export type IProps = ISectionProps;

const cocLinks = [
	(
		<Link
			href='https://confcodeofconduct.com'
			target='_blank'
		/>
	),
	(
		<Link
			href='http://creativecommons.org/licenses/by/3.0/deed.en_US'
			target='_blank'
		/>
	)
];

export default class CodeOfConduct extends Component<IProps> {

	render() {

		const {
			className,
			...props
		} = this.props;

		return (
			<Section
				{...props}
				className={style(classes.root, className)}
			>
				<h2>
					{__x`coc.title`}
				</h2>
				<article
					className={classes.article}
				>
					<p>
						{__x`coc.rules`}
					</p>
					<CocImg
						className={classes.img}
						{...noSize}
					/>
					<p>
						{__x`coc.about`}
					</p>
					<ul
						className={classes.list}
					>
						<li>
							{__x`coc.email`}:{' '}
							<Link
								to='mailto:911@gdg-siberia.com'
							>
								911@gdg-siberia.com
							</Link>
						</li>
						<li>
							{__x`coc.phone`}:{' '}
							<Link
								to='tel:+79538789131'
							>
								+7 (953) 878 91 31
							</Link>
						</li>
					</ul>
					<footer
						className={classes.footer}
					>
						<h3>
							&copy; {__x`coc.copyline`}
						</h3>
						<p>
							{__x('coc.copyright', cocLinks)}
						</p>
					</footer>
				</article>
			</Section>
		);
	}
}
