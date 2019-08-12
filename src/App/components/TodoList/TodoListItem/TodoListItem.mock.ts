import faker from 'faker';

export function getFakeData() {
	return {
		id:    faker.random.uuid(),
		value: faker.lorem.words()
	};
}
