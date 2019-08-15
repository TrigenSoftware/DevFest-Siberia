import React, {
	Component
} from 'react';
import Section, {
	IProps as ISectionProps
} from '~/components/Section';
import Brands, {
	BrandsTitle,
	BrandsRow,
	BrandsItem
} from '~/components/Brands';
import stylesheet from './Partners.st.css';

export type IProps = ISectionProps;

export default class Partners extends Component<IProps> {

	render() {

		const {
			props
		} = this;

		return (
			<Section
				{...props}
				{...stylesheet('root', {}, props)}
			>
				<h2
					{...stylesheet('title')}
				>
					Partners
				</h2>
				<Brands>
					<BrandsTitle>
						With support of
					</BrandsTitle>
					<BrandsRow>
						<BrandsItem
							href='https://academpark.com'
							src='https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/academpark.svg'
							title='Academpark'
						/>
						<BrandsItem
							href='https://developers.google.com'
							src='https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/google.svg'
							title='Google'
						/>
					</BrandsRow>
				</Brands>
				<Brands>
					<BrandsTitle>
						Media Partners
					</BrandsTitle>
					<BrandsRow>
						<BrandsItem
							href='https://androiddev.apptractor.ru/'
							src='https://res.cloudinary.com/trigen/image/upload/v1565857597/devfest2019/android.svg'
							title='Android Dev Podcast'
						/>
					</BrandsRow>
				</Brands>
			</Section>
		);
	}
}
