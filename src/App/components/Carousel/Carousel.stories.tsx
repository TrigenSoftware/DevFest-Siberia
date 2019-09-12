import faker from 'faker';
import React from 'react';
import {
	storiesOf
} from '@storybook/react';
import ProfileCard from '../ProfileCard';
import Carousel from './';

const stylableApi = `
Stylable API
---
_empty_
`;

storiesOf('Components|Carousel', module)
	.addParameters({
		info: stylableApi
	})
	.add(
		'with default state',
		() => (
			<Carousel>
				<ProfileCard
					src={faker.image.avatar()}
					firstname={faker.name.firstName()}
					lastname={faker.name.lastName()}
					description={faker.lorem.word()}
					location={faker.lorem.word()}
				/>
				<ProfileCard
					src={faker.image.avatar()}
					firstname={faker.name.firstName()}
					lastname={faker.name.lastName()}
					description={faker.lorem.word()}
					location={faker.lorem.word()}
				/>
				<ProfileCard
					src={faker.image.avatar()}
					firstname={faker.name.firstName()}
					lastname={faker.name.lastName()}
					description={faker.lorem.word()}
					location={faker.lorem.word()}
				/>
			</Carousel>
		)
	);
