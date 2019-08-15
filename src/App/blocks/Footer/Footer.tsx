import React, {
	Component
} from 'react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Link from '~/components/Link';
import ContactLink from '~/components/ContactLink';
import EnvelopeIcon from '~/icons/envelope.svg';
import stylesheet from './Footer.st.css';

export type IProps = ISectionProps;

export default class Footer extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<footer
					{...stylesheet('footer')}
				>
					<ul
						{...stylesheet('list')}
					>
						<li
							{...stylesheet('item')}
						>
							<h3
								{...stylesheet('title')}
							>
								Участникам
							</h3>
						</li>
						<li
							{...stylesheet('item')}
						>
							<Link
								{...stylesheet('link')}
								to='/rules'
							>
								Правила поведения
							</Link>
						</li>
						<li
							{...stylesheet('item')}
						>
							<Link
								{...stylesheet('link')}
								to='/students'
							>
								Студентам
							</Link>
						</li>
						<li
							{...stylesheet('separator')}
						/>
						<li
							{...stylesheet('item')}
						>
							<Link
								{...stylesheet('link')}
								to='/devfest2018'
							>
								DevFest 2018
							</Link>
						</li>
						<li
							{...stylesheet('item')}
						>
							<Link
								{...stylesheet('link')}
								to='/devfest2017'
							>
								DevFest 2017
							</Link>
						</li>
						<li
							{...stylesheet('item')}
						>
							<Link
								{...stylesheet('link')}
								to='/devfest2016'
							>
								DevFest 2016
							</Link>
						</li>
					</ul>
					<ul
						{...stylesheet('list')}
					>
						<li
							{...stylesheet('item')}
						>
							<h3
								{...stylesheet('title')}
							>
								Компания
							</h3>
						</li>
						<li
							{...stylesheet('item')}
						>
							<Link
								{...stylesheet('link')}
								to='/partners'
							>
								Стать партнером
							</Link>
						</li>
					</ul>
					<ul
						{...stylesheet('list')}
					>
						<li
							{...stylesheet('item')}
						>
							<h3
								{...stylesheet('title')}
							>
								Контакты
							</h3>
						</li>
						<li
							{...stylesheet('item')}
						>
							<Link
								{...stylesheet('siteLink')}
								icon={<EnvelopeIcon/>}
								to='/contacts'
							>
								devfest@gdg-siberia.com
							</Link>
						</li>
						<li
							{...stylesheet('separator')}
						/>
						<li
							{...stylesheet('item')}
						>
							<h3
								{...stylesheet('title')}
							>
								Мы в соцсетях
							</h3>
						</li>
						<li
							{...stylesheet('item')}
						>
							<ContactLink
								{...stylesheet('contactLink')}
								type='telegram'
								to='/telegram'
							/>
							<ContactLink
								{...stylesheet('contactLink')}
								type='twitter'
								to='/twitter'
							/>
							<ContactLink
								{...stylesheet('contactLink')}
								type='vk'
								to='/vk'
							/>
						</li>
					</ul>
				</footer>
			</Section>
		);
	}
}
