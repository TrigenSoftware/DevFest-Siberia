/* tslint:disable:max-line-length */
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
import Button from '~/components/Button';
import {
	style,
	classes
} from './Photos.st.css';

export type IProps = ISectionProps;

export default class Photos extends Component<IProps> {

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
				<article
					className={classes.info}
				>
					<h2
						className={classes.title}
					>
						DevFest 2018
					</h2>
					<p
						className={classes.text}
					>
						{__x`photos.description`}
					</p>
					<footer
						className={classes.footer}
					>
						<Link
							to='https://photos.google.com/share/AF1QipOPbiE4-pBJ0FsGr6t7_htpI1IoNY0seA7S5bYW-Cg-szV7B4GX8c-812JByf6FvQ?key=eWg2VGJZc0dnX1RYTHhmT2pNZTV0dE1VbURIc1RR'
							target='_blank'
							disguised
						>
							<Button
								variant='alt'
							>
								{__x`photos.more`}
							</Button>
						</Link>
					</footer>
				</article>
				<figure
					className={classes.photo}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/7.jpg'/>
				</figure>
				<figure
					className={classes.photo}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/3.jpg'/>
				</figure>
				<figure
					className={classes.photo}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/2.jpg'/>
				</figure>
				<figure
					className={classes.photo}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/4.jpg'/>
				</figure>
				<figure
					className={classes.photo}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/1.jpg'/>
				</figure>
				<figure
					className={classes.photo}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131705/devfest2019/photos/6.jpg'/>
				</figure>
				<figure
					className={classes.photo}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/8.jpg'/>
				</figure>
				<figure
					className={classes.photo}
				>
					<img src='https://res.cloudinary.com/trigen/image/upload/v1566131704/devfest2019/photos/5.jpg'/>
				</figure>
			</Section>
		);
	}
}
