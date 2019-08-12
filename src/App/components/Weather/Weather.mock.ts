import faker from 'faker';

export function getFakeData() {
	return {
		date:          faker.date.future(1).toDateString(),
		temp:          faker.random.number({
			min: -30,
			max: 25
		}),
		description:   faker.lorem.words(),
		humidity:      faker.random.number({
			min: 0,
			max: 100
		}),
		clouds:        faker.random.number({
			min: 0,
			max: 100
		}),
		precipitation: faker.random.number({
			min: 0,
			max: 1,
			precision: .001
		})
	};
}
