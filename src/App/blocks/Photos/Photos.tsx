import React, {
	Component
} from 'react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Link from '~/components/Link';
import Button from '~/components/Button';
import {
	imageUrl
} from '@flexis/ui/components/ImageSelect/ImageSelect.stories';
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
				<div
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
						<figure
							{...stylesheet('icon')}
							style={{
								backgroundImage: `url(${imageUrl})`
							}}
						/>
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
								variant='secondary'
							>
								Больше фото
							</Button>
						</Link>
					</footer>
				</div>
				<div>
					<img src={imageUrl}/>
				</div>
				<div>
					<img src={imageUrl}/>
				</div>
				<div>
					<img src={imageUrl}/>
				</div>
				<div>
					<img src={imageUrl}/>
				</div>
				<div>
					<img src={imageUrl}/>
				</div>
				<div>
					<img src={imageUrl}/>
				</div>
				<div>
					<img src={imageUrl}/>
				</div>
				<div>
					<img src={imageUrl}/>
				</div>
			</Section>
		);
	}
}
