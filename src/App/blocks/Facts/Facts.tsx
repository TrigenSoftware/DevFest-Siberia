import React, {
	Component
} from 'react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import stylesheet from './Facts.st.css';

export type IProps = ISectionProps;

export default class Facts extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<h3
					{...stylesheet('title', {
						alt: true
					})}
				>
					DevFest Siberia это –
				</h3>
				<article
					{...stylesheet('article')}
				>
					<h4>
						Доклады
					</h4>
					<p>
						Самые горячие темы этого года от экспертов со всего мира. Секции этого года – Mobile,
						Frontend, Backend, Blockchaind и прочее и побольше. Созданно с любовью сибирскими разработчиками!
					</p>
				</article>
				<article
					{...stylesheet('article')}
				>
					<h4>
						Воркшопы
					</h4>
					<p>
						Выделенный день для практических занятий с ведущими экспертами отрасли!
						Отличный способ попробовать новые технологии, не откладывая на потом.
					</p>
				</article>
				<h2
					{...stylesheet('title')}
				>
					А также это –
				</h2>
				<ul
					{...stylesheet('numbers')}
				>
					<li>
						<b>900+</b>
						<div>Участников</div>
						Со всей страны
					</li>
					<li>
						<b>3</b>
						<div>Дня</div>
						Включая день воркшопов и практических семинаров
					</li>
					<li>
						<b>48+</b>
						<div>Спикеров</div>
						Со всего мира
					</li>
					<li>
						<b>4</b>
						<div>Потока</div>
						2880 минут удовольствия
					</li>
				</ul>
			</Section>
		);
	}
}
