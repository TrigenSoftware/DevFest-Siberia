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
					{__x`conduct.title`}
				</h2>
				<article
					{...stylesheet('article')}
				>
					<p>
						Все участники, спикеры, партнёры, волонтеры на конференции DevFest Сибирь
						обязуются соблюдать правила поведения. Организаторы надеются на вашу сознательность
						и помощь в соблюдении этих правил.
					</p>
					<p>
						DevFest Сибирь - открытая конференция для всех участников, вне зависимости от их пола,
						сексуальной ориентации, религиозных взглядов, расы, размера тела и т.д. Мы не терпим
						преследования и неуважительного отношения к участникам в любой форме. Участники,
						нарушающие правила поведения могут быть лишены возможности участия без возмещения
						стоимости билета.
					</p>
					<ul
						{...stylesheet('list')}
					>
						<li>
							{__x`conduct.email`}:{' '}
							<Link
								to='mailto:911@gdg-siberia.com'
							>
								911@gdg-siberia.com
							</Link>
						</li>
						<li>
							{__x`conduct.phone`}:{' '}
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
							Вольный перевод правил поведения, взятый с конференции Codemotion,
							распространяемый под лицензией Creative Commons Attribution 3.0
							Unported License.
						</p>
					</footer>
				</article>
			</Section>
		);
	}
}
