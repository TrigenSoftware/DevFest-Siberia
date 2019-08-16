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
			<footer
				{...stylesheet('root', {}, props)}
			>
				<Section
					{...props}
					{...stylesheet('section')}
				>
					<ul
						{...stylesheet('list')}
					>
						<li>
							<h3>
								Участникам
							</h3>
						</li>
						<li>
							<Link
								{...stylesheet('link')}
								to='/rules'
							>
								Правила поведения
							</Link>
						</li>
						<li>
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
						<li>
							<Link
								{...stylesheet('link')}
								to='/devfest2018'
							>
								DevFest 2018
							</Link>
						</li>
						<li>
							<Link
								{...stylesheet('link')}
								to='/devfest2017'
							>
								DevFest 2017
							</Link>
						</li>
						<li>
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
						<li>
							<h3>
								Компаниям
							</h3>
						</li>
						<li>
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
						<li>
							<h3>
								Контакты
							</h3>
						</li>
						<li>
							<Link
								icon={<EnvelopeIcon/>}
								to='/contacts'
							>
								devfest@gdg-siberia.com
							</Link>
						</li>
						<li
							{...stylesheet('separator')}
						/>
						<li>
							<h3>
								Мы в соцсетях
							</h3>
						</li>
						<li>
							<ContactLink
								{...stylesheet('contactLink')}
								type='telegram'
								to='/telegram'
							>
								Telegram Link
							</ContactLink>
							<ContactLink
								{...stylesheet('contactLink')}
								type='twitter'
								to='/twitter'
							>
								Twitter Link
							</ContactLink>
							<ContactLink
								{...stylesheet('contactLink')}
								type='vk'
								to='/vk'
							>
								Vkontakte Link
							</ContactLink>
						</li>
					</ul>
				</Section>
			</footer>
		);
	}
}
