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
import stylesheet from './CodeOfConduct.st.css';

export type IProps = ISectionProps;

export default class CodeOfConduct extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<h2>
					{__x`coc.title`}
				</h2>
				<article
					{...stylesheet('article')}
				>
					<p>
						{__x`coc.rules`}
					</p>
					<p>
						{__x`coc.about`}
					</p>
					<ul
						{...stylesheet('list')}
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
						{...stylesheet('footer')}
					>
						<h3>
							© Copyright
						</h3>
						<p>
							{__x`coc.copyright`}
						</p>
					</footer>
				</article>
			</Section>
		);
	}
}
