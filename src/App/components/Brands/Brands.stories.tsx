import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import Brands, {
	BrandsTitle,
	BrandsRow,
	BrandsItem
} from './';

const stylableApi = `
Stylable API
---
- ::title
- ::row
- ::item
  - ::img
`;

storiesOf('Components|Brands', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with some items',
		() => (
			<Brands>
				<BrandsTitle>
					Partners
				</BrandsTitle>
				<BrandsRow>
					<BrandsItem
						href='https://google.com'
						src='https://res.cloudinary.com/trigen/image/upload/v1565857597/devfest2019/android.svg'
						title='Android'
					/>
					<BrandsItem
						href='https://google.com'
						src='https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/academpark.svg'
						title='Academpark'
					/>
					<BrandsItem
						href='https://google.com'
						src='https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/google.svg'
						title='Google'
					/>
				</BrandsRow>
			</Brands>
		)
	)
	.add(
		'with some rows',
		() => (
			<>
				<Brands>
					<BrandsTitle>
						General partners
					</BrandsTitle>
					<BrandsRow>
						<BrandsItem
							href='https://google.com'
							src='https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/google.svg'
							title='Google'
						/>
					</BrandsRow>
				</Brands>
				<Brands>
					<BrandsTitle>
						Partners
					</BrandsTitle>
					<BrandsRow>
						<BrandsItem
							href='https://google.com'
							src='https://res.cloudinary.com/trigen/image/upload/v1565857597/devfest2019/android.svg'
							title='Android'
						/>
						<BrandsItem
							href='https://google.com'
							src='https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/academpark.svg'
							title='Academpark'
						/>
						<BrandsItem
							href='https://google.com'
							src='https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/google.svg'
							title='Google'
						/>
					</BrandsRow>
				</Brands>
				<Brands>
					<BrandsTitle>
						Partners
					</BrandsTitle>
					<BrandsRow>
						<BrandsItem
							href='https://google.com'
							src='https://res.cloudinary.com/trigen/image/upload/v1565857597/devfest2019/android.svg'
							title='Android'
						/>
						<BrandsItem
							href='https://google.com'
							src='https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/academpark.svg'
							title='Academpark'
						/>
						<BrandsItem
							href='https://google.com'
							src='https://res.cloudinary.com/trigen/image/upload/v1565854516/devfest2019/google.svg'
							title='Google'
						/>
					</BrandsRow>
				</Brands>
			</>
		)
	);
