import React, {
	Component
} from 'react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Link from '~/components/Link';
import Button from '~/components/Button';
import stylesheet from './Photos.st.css';

export type IProps = ISectionProps;

export default class Photos extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...stylesheet('root', {}, props)}
			>
				<article
					{...stylesheet('info')}
				>
					<h2
						{...stylesheet('title')}
					>
						DevFest 2018
					</h2>
					<div
						{...stylesheet('text')}
					>
						Как все прошло год назад и тут нужен осмысленный текст
					</div>
					<footer
						{...stylesheet('footer')}
					>
						<Link
							to='/photo'
							disguised
						>
							<Button
								variant='alt'
							>
								Больше фото
							</Button>
						</Link>
					</footer>
				</article>
				<div>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/7.jpg'/>
				</div>
				<div>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/3.jpg'/>
				</div>
				<div>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/2.jpg'/>
				</div>
				<div
					{...stylesheet('bigImg')}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/4.jpg'/>
				</div>
				<div
					{...stylesheet('bigImg')}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/1.jpg'/>
				</div>
				<div>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131705/devfest2019/photos/6.jpg'/>
				</div>
				<div
					{...stylesheet('bigImg')}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/8.jpg'/>
				</div>
				<div>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/5.jpg'/>
				</div>
			</Section>
		);
	}
}
